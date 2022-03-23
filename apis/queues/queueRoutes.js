const Queue = require("../../models/Queue");
const passport = require("passport");
const express = require("express");
const {
  controllerGetQueues,
  controllerAddQueue,
  controllerDeleteQueue,
  controllerUpdateQueue,
  controllerFetchQueue,
} = require("./queueControllers");

const router = express.Router();

router.param("queueId", async (req, res, next, queueId) => {
  console.log("queueId", queueId);
  const queue = await controllerFetchQueue(queueId, next);
  if (queue) {
    req.queue = queue;
    next();
  } else {
    const err = new Error("Queue Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", controllerGetQueues);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controllerAddQueue
);

router.delete(
  "/:queueId",
  passport.authenticate("jwt", { session: false }),
  controllerDeleteQueue
);
router.put(
  "/:queueId",
  passport.authenticate("jwt", { session: false }),
  controllerUpdateQueue
);

module.exports = router;
