const mongoose = require("mongoose");
const MemberSchema = new mongoose.Schema(
  {
    phone: Number,
    email: String,
    waiting: Boolean,
    queue: { type: mongoose.Schema.Types.ObjectId, ref: "Queue" },
    //fields: { name: String, value: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
