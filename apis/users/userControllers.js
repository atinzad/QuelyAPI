const User = require("../../models/User");
const dotenv = require("dotenv");
//dotenv.config();

// Auth Libraries
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

generateToken = (user) => {
  const payload = {
    _id: user.id,
    name: user.name,
    exp: Date.now() + parseInt(process.env.JWT_EXPIRATION_MS),
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};
createHash = async (password) => {
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(password, saltRound);
  return hashedPassword;
};

exports.controllerGetUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.json({ msg: "Users fetched", payload: users });
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  try {
    req.body.password = await createHash(req.body.password);
    const newUser = await User.create(req.body);

    const token = generateToken(newUser);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
exports.signin = async (req, res, next) => {
  console.log("control", req.user);
  const token = generateToken(req.user);
  res.json({ token });
};
