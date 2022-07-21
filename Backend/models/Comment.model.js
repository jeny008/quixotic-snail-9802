const { Schema, model } = require("mongoose");

const CommentSchema = new Schema(
  {
    Rating: Number,
    Review: String,
    CreatedAt: Date,
    UserID: Schema.Types.ObjectId,
    ProductID: Schema.Types.ObjectId,
  },
  { collection: "comment" }
);

const CommentModel = model("CommentModel", CommentSchema, "comment");

module.exports = CommentModel;
