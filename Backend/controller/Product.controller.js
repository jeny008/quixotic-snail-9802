const DataModel = require("../models/Product.model");

// All Product
const getAllProducts = async (category) => {
  if(category){
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
    const data = await DataModel.find(category);
    return {
      message: "data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
  
};

// Single product
const getProducts = async (id) => {
  conso
  try {
  //   let data = await ProductModel.aggregate([
  //     { $match: { _id: id } },
      // {
      //   $lookup: {
      //     from: "comment",
      //     localField: "CommentID",
      //     foreignField: "_id",
      //     as: "comment",
      //   },
      // },
    // ]);
    const data = await ProductModel.findbyid(id)
    return {
      message: "data obtained successfully",
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
      message: "data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
};

module.exports = { getAllProducts, getProducts, categoryFilter };
