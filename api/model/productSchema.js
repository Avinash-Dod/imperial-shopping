const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: { type: Number, unique: true },
  productName: { type: String, required: true, max: 100 },
  price: { type: String, required: [true, "Please include the product price"] },
  description:{type:String ,required:[true,"please enter description"],max:2000}

});

module.exports = mongoose.model("Product", productSchema);

