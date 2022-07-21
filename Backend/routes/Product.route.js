const { Router } = require("express");
const {
  getAllProducts,
  getProducts,
  addToCart
} = require("../controller/Product.controller");

const productRouter = Router();

productRouter.get("/", async (req, res) => {

  const { message, status, data } = await getAllProducts(req.query);

  console.log(req.body, req.query)
  const category  = req.query;
  if(category) {
    console.log(category)
  }
  const { message, status, data } = await getAllProducts();

  const Category = req.query.Category || null;
  const { message, status, data } = await getAllProducts(Category);
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

productRouter.get("/cart/:id", async (req, res) => {
  const { id } = req.params;
  const { message, status, data } = await addToCart(id);
  if (status === "error") {
    return res.status(404).send({ message, status, data });
  }
  return res.status(200).send({ message, status, data });
});

module.exports = productRouter;
