const { Router } = require("express");
const {
  getAllProducts,
  getProducts,
  categoryFilter,
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

  if (status === "error") {
    return res.status(404).send({ message, status, data });
  }
  return res.status(200).send({ message, status, data });
});

productRouter.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { message, status, data } = await categoryFilter(id);
  if (status === "error") {
    return res.status(404).send({ message, status, data });
  }
  return res.status(200).send({ message, status, data });
});

// productRouter.post("/:category", async (req, res) => {
//   const { category } = req.query;
//   const { message, status, data } = await categoryFilter(category);
//   if (status === "error") {
//     return res.status(404).send({ message, status, data });
//   }
//   return res.status(200).send({ message, status, data });
// });

module.exports = productRouter;
