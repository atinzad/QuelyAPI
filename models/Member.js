const { Schema, model } = require("mongoose");

const MemberSchema = new Schema(
  {
    phone: Number,
    email: String,
    waiting: { type: Boolean, default: true },
    queue: { type: Schema.Types.ObjectId, ref: "Queue" },
    //fields: { name: String, value: String },
  },
  { timestamps: true }
);

module.exports = model("Member", MemberSchema);
