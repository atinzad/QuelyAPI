const Member = require("../../models/Member");

exports.controllerFetchMember = async (memberId, next) => {
  try {
    const member = await Member.findById(memberId);

    if (member) return member;
    else {
      const error = new Error("Member ID was not found!");
      error.status = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

exports.controllerGetMembers = async (req, res, next) => {
  try {
    const members = await Member.find();

    res.json({ msg: "Members fetched", payload: members });
  } catch (error) {
    next(error);
  }
};

exports.controllerAddMember = async (req, res, next) => {
  try {
    const member = req.body;
    const createdMember = await Member.create(member);
    res.status(200).json({ msg: "Member Created", payload: createdMember });
  } catch (error) {
    next(error);
  }
};

exports.controllerUpdateMember = async (req, res, next) => {
  try {
    const id = req.member._id;
    const memberBody = req.body;
    const updatedMember = await Member.findByIdAndUpdate(id, memberBody, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      msg: "Member Updated",
      payload: updatedMember,
    });
  } catch (error) {
    next(error);
  }
};

exports.controllerDeleteMember = async (req, res, next) => {
  try {
    await req.member.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
