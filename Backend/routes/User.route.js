const { Router } = require("express");
const {
  checkLogin,
  loginUser,
  sendOtp,
  signupUser,
} = require("../controller/User.controller");

const userRouter = Router();

//send otp
userRouter.post("/login", async (req, res) => {
  const { mobile } = req.body;
  if (mobile.toString().length !== 10) {
    return res.status(200).send({ message: "Invalid Mobile Number" });
  }
  const { message, status, otp } = await sendOtp(mobile.toString());
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "failed") {
    return res.status(201).send({ message, status });
  }
  return res.status(200).send({ message, status, data: otp });
});

//login user by otp check
userRouter.post("/login/otp", async (req, res) => {
  const { otp } = req.body;
  const { message, status, value } = await loginUser(otp);
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "failed") {
    return res.status(201).send({ message, status });
  } else {
    return res
      .cookie("auth", value, { httpOnly: true, secure: false })
      .status(200)
      .send({ message, status });
  }
});

// create new user
userRouter.post("/signup", async (req, res) => {
  const { first_name, last_name, mobile } = req.body;
  if (mobile.toString().length !== 10) {
    return res.status(200).send({ message: "Invalid Mobile Number" });
  }
  const { message, status } = await signupUser(
    first_name,
    last_name,
    mobile.toString()
  );
  if (status === "error") {
    return res.status(404).send({ message, status });
  } else if (status === "exists") {
    return res.status(200).send({ message, status });
  }
  return res.status(200).send({ message, status });
});

//logout user
userRouter.post("/logout", async (req, res) => {
  try {
    res.clearCookie("TOKEN");
    return res
      .status(200)
      .send({ message: "user loggedout successfully", status: "success" });
  } catch (err) {
    return res
      .status(404)
      .send({ message: "something went wrong", status: "error" });
  }
});

module.exports = userRouter;
