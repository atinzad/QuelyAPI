const Queue = require("../../models/Queue");
const passport = require("passport");
const express = require("express");
const {
  controllerGetQueues,
  controllerAddQueue,
  controllerDeleteQueue,
  controllerUpdateQueue,
} = require("./queueControllers");

const router = express.Router();

router.get("/", controllerGetQueues);

router.post(
  "/",
  //passport.authenticate("jwt", { session: false }),
  controllerAddQueue
);

router.delete(
  "/:queueId",
  //passport.authenticate("jwt", { session: false }),
  controllerDeleteQueue
);
router.put(
  "/:queueId",
  //   passport.authenticate("jwt", { session: false }),
  controllerUpdateQueue
);

module.exports = router;
