const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  category:{ type: String, required: true, max: 50 },

  productName: { type: String, required: true, max: 100 },

  price: { type: Number, required: [true, "Please include the product price"] },

  description:{type:String ,required:[true,"please enter description"],max:2000},

  // image: {
  //   type: String,
  //   required: true,
  // },

});

module.exports = mongoose.model("Product", productSchema);

