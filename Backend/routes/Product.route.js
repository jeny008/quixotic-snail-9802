const { Router } = require("express");
const {
  getAllProducts,
  getProducts,
  addToCart,
  increaseQunatity,
  decreaseQuantity,
} = require("../controller/Product.controller");
const authenticate = require("../Middleware/Authorization.middleware");

const productRouter = Router();

productRouter.get("/", async (req, res) => {
  const { message, status, data } = await getAllProducts(req.query);
  if (status === "error") {
    return res.status(404).send({ message, status, data });
  }
  return res.status(200).send({ message, status, data });
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { message, status, data } = await getProducts(id);
  if (status === "error") {
    return res.status(404).send({ message, status, data });
  }
  return res.status(200).send({ message, status, data });
});


productRouter.get("/:id/addtocart", async (req, res) => {
  // console.log(req.cookies.auth);
  const mobile = req.cookies.auth;
  if (mobile === null || undefined) {
    return res
      .status(401)
      .send({ message: "session expired", status: "user logged out" });
  }
  const { id } = req.params;
  const { qty } = 1;
  const { user } = await authenticate(mobile);
  if (user === undefined || user.length === 0) {
    return res
      .status(401)
      .send({ message: "unauthorised user", status: "failed" });
  }
  const { message, status } = await addToCart(id, qty, mobile);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }

  return res.status(200).send({ message, status });
});


productRouter.get("/:id/increaseqty", async (req, res) => {
  const mobile = req.cookies.auth;
  const { id } = req.params;
  const { user } = await authenticate(mobile);
  if (user.length === 0) {
    return res
      .status(401)
      .send({ message: "unauthorised user", status: "failed" });
  }
  const { message, status } = await increaseQunatity(id, mobile);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status });
});

productRouter.get("/:id/decreaseqty", async (req, res) => {
  const mobile = req.cookies.auth;
  const { id } = req.params;
  const { user } = await authenticate(mobile);
  if (user.length === 0) {
    return res
      .status(401)
      .send({ message: "unauthorised user", status: "failed" });
  }
  const { message, status } = await decreaseQuantity(id, mobile);
  if (status === "error") {
    return res.status(404).send({ message, status });
  }
  return res.status(200).send({ message, status });
});


module.exports = productRouter;
