const { Schema, model } = require("mongoose");

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "add your Name"],
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    validate: [validateEmail, "Email validation failed"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Add your Password"],
  },
  queues: [{ type: Schema.Types.ObjectId, ref: "Queue" }],
});

module.exports = model("User", UserSchema);
