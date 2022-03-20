const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database");
const testRoutes = require("./apis/tests/testRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});

app.use("/api/tests", testRoutes);

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
