const products = require("../products.json");

module.exports = getProduct = (req, res) => {
  // find returns the item if it finds it, or undefined if not
  const item = products.find(val => val.id === parseInt(req.params.id));
  if (!item) {
    return res.status(500).send("Item not in list");
  }
  res.status(200).send(item);
};
