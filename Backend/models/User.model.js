const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    First_Name: String,
    Last_Name: String,
    Email: String,
    Mobile: String,
    OTP: Number,
  },
  { collection: "user" }
);

const UserModel = model("UserModel", UserSchema, "user");

module.exports = UserModel;
