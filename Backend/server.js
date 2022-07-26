const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const Redis = require("ioredis");
const productRouter = require("./routes/Product.route");
const userRouter = require("./routes/User.route");
const cartRouter = require("./routes/Cart.route");

const app = express();
app.set("trust proxy", 1); // trust first proxy
app.use(
  cors({
    origin: true,
    credentials: true,
    sameSite: "none",
  })
);

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/BigBasket", userRouter);
app.use("/BigBasket/product", productRouter);
app.use("/BigBasket/cart", cartRouter);

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
