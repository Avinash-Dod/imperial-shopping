const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const { stringify } = require("nodemon/lib/utils");

const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    fullName: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        minlength: 10,
    },
    email: {
        type: String,
        required: [true, "Please include the product price"]
    },
    postCode: {
        type: Number,
        required: true,
        minlength: 6
    },
    address: {
        type: String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    orderNote: {
        type: String,
        required: true
    },
    productDetail: [{
        
    }],
    status:{
        type:String,
        required:true
    },
    total:{
        type:Number,
        required:true
    }




});

// module.exports = mongoose.model("user", userSchmea);
module.exports = Order = mongoose.model("orders", orderSchema);
