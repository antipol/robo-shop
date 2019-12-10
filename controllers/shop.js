const Product = require("../models/product");

exports.get = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};
