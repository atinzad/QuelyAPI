const { Schema, model } = require("mongoose");

const MemberSchema = new Schema(
  {
    phone: Number,
    email: String,
    waiting: { type: Boolean, default: true },
    queue: { type: Schema.Types.ObjectId, ref: "Queue" },
    fieldValues: {},
  },
  { timestamps: true }
);

module.exports = model("Member", MemberSchema);
