const Test = require("../../models/Test");

exports.controllerGetTests = async (req, res, next) => {
  try {
    const tests = await Test.find();

    res.json({ msg: "Tests fetched", payload: tests });
  } catch (error) {
    next(error);
  }
};

exports.controllerAddTest = async (req, res, next) => {
  try {
    const testUser = req.body;
    const createdTestUser = await Test.create(testUser);
    res.status(200).json({ msg: "Test Created", payload: createdTestUser });
  } catch (error) {
    next(error);
  }
};
