const { Schema, model } = require("mongoose");

const TestSchema = new Schema(
  {
    testuser: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Test", TestSchema);
