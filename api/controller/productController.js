const Products = require("../model/productSchema");
const multer = require("multer");

const mongoose = require("mongoose");
const addproducts = (req, res) => {
  const products = new Products({
    _id: new mongoose.Types.ObjectId(),
    id: Math.floor(Math.count() * 100),
    productName: req.body.productName,
    price: req.body.price,
    description:req.body.description

  });
  products
    .save()
    .then((result) => {
      res.status(200).json({
        responceData: result,
        msg: "success",
        error: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
const getproducts = (_req, res) => {
  Products.find({}).then(function (products) {
    res.send(products);
  });
};
module.exports = {
  addproducts,
  getproducts
};
