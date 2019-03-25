const express = require("express");
const app = express();
const products = require("../products.json");
const getProducts = require("./getProducts.js");
const getProduct = require("./getProduct.js");

app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server popped off on ${PORT}`);
});
