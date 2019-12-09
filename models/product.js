const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  imgUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }
});

module.exports = mongoose.model("Product", ProductSchema);
