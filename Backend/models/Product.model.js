const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    Title: String,
    Brand: String,
    Description: String,
    Image_url: String,
    Price: Number,
    Category: String,
  },
  { collection: "data" }
);

const DataModel = model("DataModel", ProductSchema, "data");

module.exports = DataModel;
