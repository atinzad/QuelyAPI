const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");
const testRoutes = require("./apis/tests/testRoutes");
const userRoutes = require("./apis/users/userRoutes");
const queueRoutes = require("./apis/queues/queueRoutes");
const memberRouter = require("./apis/members/memberRoutes");

//Auth
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  console.log(req.body);
  next();
});

// Passport Setup
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

//routes
app.use("/api/users", userRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/queue", queueRoutes);
app.use("/api/members", memberRouter);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ msg: err.message || "Internal Server Error" });
  next();
});

app.use((req, res, next) => {
  res.status(404).json({ msg: "Path Not Found" });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectDB();
});
