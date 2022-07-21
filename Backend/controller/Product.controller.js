const DataModel = require("../models/Product.model");

// All Product
const getAllProducts = async () => {
  try {
    const data = await DataModel.find();
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
    let data = await ProductModel.aggregate([
      { $match: { _id: id } },
      {
        $lookup: {
          from: "comment",
          localField: "CommentID",
          foreignField: "_id",
          as: "comment",
        },
      },
    ]);
    return {
      message: "Data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
};

const categoryFilter = async (value) => {
  try {
    const data = await DataModel.find({ Category: value });
    return {
      message: "Data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
};

module.exports = { getAllProducts, getProducts, categoryFilter };
