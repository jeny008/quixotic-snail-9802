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
const getAllProducts = async (Category) => {
  try {
    if (Category === null) {
      const data = await DataModel.find();
      return {
        message: "data obtained successfully",
        status: "success",
        data: data,
      };
    } else {
      const data = await DataModel.find({ Category });
      return {
        message: "data obtained successfully",
        status: "success",
        data: data,
      };
    }
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
  
};

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

const addToCart = async (id) => {
  try {
    const data = await Model.findById(id);
    return {
      message: "data obtained successfully",
      status: "success",
      data: data,
    };
  } catch (err) {
    return { message: "something went wrong", status: "error", data: null };
  }
};

module.exports = { getAllProducts, getProducts, addToCart };
