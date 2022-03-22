const Queue = require("../../models/Queue");

exports.controllerGetQueues = async (req, res, next) => {
  console.log("req");
  try {
    const queues = await Queue.find();

    res.json({ msg: "Queues fetched", payload: queues });
  } catch (error) {
    console.log("The error is:", error);
    next(error);
  }
};

exports.controllerAddQueue = async (req, res, next) => {
  try {
    //req.body.owner = req.user._id;
    clg("req.body", req.body);
    const queue = req.body;
    const createdQueue = await Queue.create(queue);
    res.status(200).json({ msg: "Queue Created", payload: "createdQueue" });
  } catch (error) {
    next(error);
  }
};

exports.controllerDeleteQueue = async (req, res, next) => {};

exports.controllerUpdateQueue = async (req, res, next) => {};
