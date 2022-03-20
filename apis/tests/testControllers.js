const Test = require("../../models/Test");

exports.controllerFetchTest = async (usertestId, next) => {
  try {
    const userTest = await Test.findById(usertestId);

    if (userTest) return userTest;
    else {
      const error = new Error("userTest ID was not found!");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

exports.controllerGetTests = async (req, res, next) => {
  try {
    const userTests = await Test.find();

    res.json({ msg: "Tests fetched", payload: userTests });
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

exports.controllerUpdateTest = async (req, res, next) => {
  try {
    const id = req.usertest._id;
    const userTest = req.body;
    console.log("hello");
    const updatedTest = await Test.findByIdAndUpdate(id, userTest, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      msg: "Test Updated",
      payload: updatedTest,
    });
  } catch (error) {
    next(error);
  }
};

exports.controllerDeleteTest = async (req, res, next) => {
  try {
    await req.usertest.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
