const express = require("express");
const router = express.Router();
const products = require("../products/products");

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:productId", async (req, res) => {
  const product = products.find((p) => p.id === +req.params.productId);
  res.send(product);
});

module.exports = router;
