const mongoose = require("mongoose");
const MemberSchema = new mongoose.Schema(
  {
    phone: Number,
    email: String,
    fields: { name: String, value: String },
    waiting: Boolean,
    // queue: { type: mongoose.Schema.Types.ObjectId, ref: "Queue" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
