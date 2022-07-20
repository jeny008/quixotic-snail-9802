const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const productRouter = require("./routes/Product.route");

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/BigBasket/product", productRouter);

const PORT = process.env.PORT || 8080;
const mongoDB = process.env.MongoAtlas;

app.listen(PORT, async () => {
  mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection successful to server");
    })
    .catch((err) => {
      console.log(err, "Failed to connect to server");
    });
  console.log(`Listening on Port ${PORT}`);
});
