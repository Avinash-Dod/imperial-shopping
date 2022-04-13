const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  name: {
    type: String,
    unique: true,

    required: [true, "Please include the product name"]
  },
  description:{
    type:String

  },
  price: {
    type: String,
    required: [true, "Please include the product price"],
    unique:false
  }
 
});

module.exports = mongoose.model("Product", productSchema);