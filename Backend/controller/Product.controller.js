const DataModel = require("../models/Product.model");
const UserModel = require("../models/User.model");

// All Product
const getAllProducts = async (category) => {
  if (category) {
    try {
      const data = await DataModel.find(category);
      return {
        message: "Data obtained successfully",
        status: "success",
        data: data,
      };
    } catch (err) {
      return { message: "something went wrong", status: "error", data: null };
    }
  }
  try {
    const data = await DataModel.find();
    return {
      message: "data obtained successfully",
      status: "success",
      data: data,
    };
  }
  catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
}

// Single product
const getProducts = async (id) => {
  try {
    const data = await DataModel.findById(id);
    return {
      message: "data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
};

const addToCart = async (id, qty, mobile) => {
  try {
    const data = await DataModel.findById(id);
    await UserModel.updateOne(
      { mobile },
      { $push: { Cart: { productId: data._id, quantity: qty } } }
    );
    return {
      message: "item added to cart",
      status: "success",

    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

const increaseQunatity = async (id, mobile) => {
  try {
    await UserModel.updateOne(
      { mobile, "Cart.productId": id },
      {
        $inc: {
          "Cart.$.quantity": 1,
        },
      }
    );
    return {
      message: "quantity increased successfully",
      status: "success",
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};

const decreaseQuantity = async (id, mobile) => {
  try {
    await UserModel.updateOne(
      { mobile, "Cart.productId": id },
      {
        $inc: {
          "Cart.$.quantity": -1,
        },
      }
    );
    return {
      message: "quantity decreased successfully",
      status: "success",
    };
  } catch (err) {
    return { message: "something went wrong", status: "error" };
  }
};


module.exports = {
  getAllProducts,
  getProducts,
  addToCart,
  decreaseQuantity,
  increaseQunatity,
};
