const { Router } = require("express");
const { getAllProducts } = require("../controller/Product.controller");

const productRouter = Router();

productRouter.get("/", async (req, res) => {
  console.log(req.query);
  const { message, status, data } = await getAllProducts(req.query);
  if (status === "error") {
    return res.status(404).send({ message, status, data });
  }
  return res.status(200).send({ message, status, data });
});

productRouter.post("/id", async (req, res) => {
  const { id } = req.params;
  
});

module.exports = productRouter;
