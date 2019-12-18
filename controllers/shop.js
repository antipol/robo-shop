const Product = require("../models/product");

exports.get = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.render("shop/index", {
      title: "Products",
      messages: req.flash("cart-info"),
      products
    });
  } catch (err) {
    next(err);
  }
};
