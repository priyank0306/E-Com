const mongoose = require("mongoose");

// const TempProductSchema = new mongoose.Schema({
//   products: {
//     _id: mongoose.Types.ObjectId,
//     productId: { type: Number },
//     title: { type: String, unique: false },
//     desc: { type: String },
//     img: { type: String },
//     composition: { type: String },
//     size: { type: String },
//     price: { type: Number },
//     category: { type: String },
//     for: { type: String },
//     usage: { type: String },
//     quantity: {
//       type: Number,
//       default: 1,
//     },
//   },
// });

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    unique: true,
  },
  products: [
    {
      _id: mongoose.Types.ObjectId,
      productId: { type: Number },
      title: { type: String, unique: false },
      desc: { type: String },
      img: { type: String },
      composition: { type: String },
      size: { type: String },
      price: { type: Number },
      category: { type: String },
      for: { type: String },
      usage: { type: String },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  totalPrice: { type: Number, default: 0 },
});

module.exports = mongoose.model("Cart", CartSchema);
