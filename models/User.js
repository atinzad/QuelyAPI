const mongoose = require("mongoose");

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("User", UserSchema);
