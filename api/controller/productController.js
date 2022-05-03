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
  prod.find({}).then(function (products) {
    res.send(products);
  });
};
const updateProduct =  (req, res) => {
  const id = req.params.id
  Products.findByIdAndUpdate({ _id: id }, {
    $set: {
      id: Math.floor(Math.count() * 100),
    productName: req.body.productName,
    price: req.body.price,
    description:req.body.description
      
    }
    //  ?  await bcrypt.hash(req.body.pin, 10) : false,? await bcrypt.hash(req.body.pin, 10) : false,
  })
    .then((result) => {

      if (result) {
        return res.send({
          message: "Product was Updated successfully!",
          success: true,
          data: {},
        }
        );
      } else {
        return res.send({
          message: `Cannot Update product `,
          success: false,
          data: {},
        });
      }

    }
    )
    .catch((err) => {
      return res.status(500).send({
        message: "Could not Update Product with id=" + id,
        success: false,
        data: {},
      });
    });
}
module.exports = {
  addproducts,
  getproducts
};
