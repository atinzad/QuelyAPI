const express = require("express");
const passport = require("passport");
const {
  controllerAddMember,
  controllerFetchMember,
  controllerDeleteMember,
  controllerUpdateMember,
  controllerGetMembers,
} = require("./memberControllers");

const router = express.Router();

router.param("memberId", async (req, res, next, memberId) => {
  console.log("memberId", memberId);
  const member = await controllerFetchMember(memberId, next);
  if (member) {
    req.member = member;
    next();
  } else {
    const err = new Error("Member Not Found");
    err.status = 404;
    next(err);
  }
});
//Hadeel
router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  controllerGetMembers
);

router.post("/", controllerAddMember);

router.put(
  "/:memberId",

  controllerUpdateMember
);

router.delete("/:memberId", controllerDeleteMember);

module.exports = router;
