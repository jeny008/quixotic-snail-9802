const DataModel = require("../models/Product.model");

// All Product
const getAllProducts = async () => {
  try {
    const data = await DataModel.findOne();
    return {
      message: "Data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
};

// Single product
const getProducts = async (id) => {
  try {
    const data = await DataModel.find({});
    return {
      message: "Data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
};

module.exports = { getAllProducts, getProducts };
