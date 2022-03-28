const { Schema, model } = require("mongoose");

const QueueSchema = new Schema(
  {
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    // members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
    isPhoneAvailable: { type: Boolean, default: false },
    isPhoneRequired: { type: Boolean, default: false },
    isEmailAvailable: { type: Boolean, default: false },
    isEmailRequired: { type: Boolean, default: false },
    //fields: [{}],
  },
  { timestamps: true }
);

module.exports = model("Queue", QueueSchema);
