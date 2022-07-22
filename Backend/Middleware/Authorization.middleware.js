const UserModel = require("../models/User.model");

const authenticate = async (mobile) => {
  try {
    const user = await UserModel.find({ mobile });
    if (user) {
      return { user };
    }
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = authenticate;
