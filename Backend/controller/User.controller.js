const UserModel = require("../models/User.model");
const Redis = require("ioredis");
const jwt = require("jsonwebtoken");
const checkLogin = async () => {};

//otp for user varification
const sendOtp = async (mobile) => {
  try {
    const user = await UserModel.findOne({ mobile });
    if (user) {
      const otp = Math.floor(1000 + Math.random() * 9000);
      const client = new Redis({
        host: "127.0.0.1",
        port: 6379,
      });
      client.set(otp, mobile, "ex", 60);
      return { message: "otp sent", status: "success", otp };
    } else {
      return { message: "user does not exist", status: "failed" };
    }
  } catch (err) {
    return { message: "otp failed", status: "error" };
  }
};

//login user
const loginUser = async (otp) => {
  try {
    const client = new Redis({
      host: "127.0.0.1",
      port: 6379,
    });
    let value = await client.get(otp);
    if (value === null) {
      return { message: "wrong otp", status: "failed" };
    } else {
      return { message: "login success", status: "success", value };
    }
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

// Create new user
const signupUser = async (first_name, last_name, mobile) => {
  try {
    const user = await UserModel.findOne({ mobile });
    if (user) {
      return { message: "user already exists", status: "exists" };
    } else {
      let newUserData = {
        first_name,
        last_name,
        mobile,
        cart: [],
      };
      const newUser = new UserModel(newUserData);
      newUser.save();
      return { message: "user created", status: "success" };
    }
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};


module.exports = { checkLogin, loginUser, sendOtp, signupUser };
