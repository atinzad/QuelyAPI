const express = require("express");
const passport = require("passport");
const {
  controllerGetTests,
  controllerAddTest,
  controllerUpdateTest,
  controllerFetchTest,
  controllerDeleteTest,
} = require("./testControllers");

const router = express.Router();

router.param("usertestId", async (req, res, next, usertestId) => {
  console.log("usertestId", usertestId);
  const userTest = await controllerFetchTest(usertestId, next);
  if (userTest) {
    req.usertest = userTest;
    next();
  } else {
    const err = new Error("Trip Not Found");
    err.status = 404;
    next(err);
  }
});

router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  controllerGetTests
);

router.post("/", controllerAddTest);

router.put(
  "/:usertestId",

  controllerUpdateTest
);

router.delete("/:usertestId", controllerDeleteTest);

module.exports = router;
