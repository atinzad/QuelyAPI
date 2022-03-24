const { Schema, model } = require("mongoose");

const QueueSchema = new Schema(
  {
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    // members: [{ type: Schema.Types.ObjectId, ref: "Member" }],
    isAvailablePhone: { type: Boolean, default: false },
    isRequiredPhone: { type: Boolean, default: false },
    isAvailableEmail: { type: Boolean, default: false },
    isRequiredEmail: { type: Boolean, default: false },
    //fields: [{}],
  },
  { timestamps: true }
);

module.exports = model("Queue", QueueSchema);
