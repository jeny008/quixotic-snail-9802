const UserModel = require("../models/User.model");

const cartItems = async (mobile) => {
  try {
    const data = await UserModel.aggregate([
      { $match: { mobile: mobile } },
      {
        $lookup: {
          from: "data",
          localField: "Cart.productId",
          foreignField: "_id",
          as: "cartItems",
        },
      },
    ]);
    let cart = data[0].Cart;
    let cartItems = data[0].cartItems;

    for (let i = 0; i < cartItems.length; i++) {
      for (let j = 0; j < cart.length; j++) {
        if (cart[j].productId.toString() === cartItems[i]._id.toString()) {
          cartItems[i] = {
            ...cartItems[i],
            quantity: cart[j].quantity,
          };
          break;
        }
      }
    }
    return {
      message: "cart items received successfully",
      status: "success",
      data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

module.exports = { cartItems };
