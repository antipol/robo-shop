const Cart = require("../models/cart");

exports.initCart = (req, res, next) => {
  req.session.cart = new Cart(req.session.cart);

  next();
};

exports.setLocals = (req, res, next) => {
  res.locals.session = req.session;

  next();
};
