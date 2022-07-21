const UserModel = require("../models/User.model");
const { options } = require("../routes/Product.route");

const checkLogin = async () => {};

const sendOtp = async (mobile) => {
  try {
    const user = await UserModel.findOne({ Mobile: mobile });
    if (user) {
      const otp = Math.floor(1000 + Math.random() * 9000);
      let newUserData = {
        first_name: "",
        last_name: "",
        email: "",
        mobile: mobile,
        cart: [],
      };
      const newUser = new UserModel(newUserData);
      newUser.save((err, success) )
      return { message: "Otp sent", status: "success", otp };
    }
  } catch (err) {
    return { message: "Otp sent failed", status: "error" };
  }
};

const loginUser = async (otp) => {};

const logoutUser = async () => {};

module.exports = { checkLogin, loginUser, logoutUser };
