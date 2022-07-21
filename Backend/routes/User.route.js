const { Router } = require("express");
const Redis = require("ioredis");
const {
  checkLogin,
  loginUser,
  logoutUser,
} = require("../controller/User.controller");
const userRouter = Router();

// const client = new Redis({
//   host: "127.0.0.1",
//   port: 6379,
// });

userRouter.post("/login", async (req, res) => {
  const { mobile } = req.body;
  if (mobile.length !== 10) {
    return res.status(200).send({ message: "Invalid Mobile Number" });
  }
  const { message, status, otp } = await sendOtp(mobile);
  if (status === "error") {
    return res.status(404).send({ message, status, data });
  }
  return res.status(200).send({ message, status, data });
});

module.exports = userRouter;
