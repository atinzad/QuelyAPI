const Queue = require("../../models/Queue");

exports.controllerFetchQueue = async (queueId, next) => {
  try {
    const queue = await Queue.findById(queueId);

    if (queue) return queue;
    else {
      const error = new Error("Queue ID was not found!");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

exports.controllerGetQueues = async (req, res, next) => {
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
    //hadeel
    //Solved
    req.body.owner = req.user._id; //Note: add this so that the signed in User is the user that will have that Queue associted with them
    const queue = req.body;
    const createdQueue = await Queue.create(queue);
    res.status(200).json({ msg: "Queue Created", payload: createdQueue });
  } catch (error) {
    next(error);
  }
};

exports.controllerDeleteQueue = async (req, res, next) => {
  try {
    await req.queue.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.controllerUpdateQueue = async (req, res, next) => {};
