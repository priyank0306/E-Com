const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    composition: { type: String },
    size: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    category: { type: String },
    for: { type: String },
    usage: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
