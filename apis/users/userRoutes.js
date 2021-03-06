const express = require("express");
const { signup, signin, controllerGetUsers } = require("./userControllers");

const passport = require("passport");

const router = express.Router();

router.get("/", controllerGetUsers);

router.post("/signup", signup);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

module.exports = router;
