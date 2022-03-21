const express = require("express");
const { signup, signin } = require("./userControllers");
const router = express.Router();
const passport = require("passport");

router.post("/signup", signup);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

module.exports = router;
