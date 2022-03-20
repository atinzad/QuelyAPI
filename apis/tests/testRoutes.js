const express = require("express");
const { controllerGetTests, controllerAddTest } = require("./testControllers");

const router = express.Router();

router.get("/", controllerGetTests);

router.post("/", controllerAddTest);

module.exports = router;
