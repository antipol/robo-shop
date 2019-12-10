const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shop");

const setCookies = (req, res, next) => {
  res.cookie("Benjamin_says", "Hello to COOKIES!");
  res.cookie("now", new Date());
  next();
};

const logCookies = (req, res, next) => {
  console.log(req.cookies);
  next();
};

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/", logCookies, setCookies, shopController.get);

module.exports = router;
