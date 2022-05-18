const Products = require("../model/productSchema");
const multer = require("multer");
const path = require("path");

const mongoose = require("mongoose");
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "../../client/public/assets/products");
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");

const addproducts = (req, res) => {
  const products = new Products({
    _id: new mongoose.Types.ObjectId(),
    category: req.body.category,
    productName: req.body.productName,
    price: req.body.price,
    description: req.body.description,
    //image: req.file.path,
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
const updateProduct = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        category: req.body.category,
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
      },
      //  ?  await bcrypt.hash(req.body.pin, 10) : false,? await bcrypt.hash(req.body.pin, 10) : false,
    }
  )
    .then((result) => {
      if (result) {
        return res.send({
          message: "Product was Updated successfully!",
          success: true,
          data: {},
        });
      } else {
        return res.send({
          message: `Cannot Update Product `,
          success: false,
          data: {},
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not Update product with id=" + id,
        success: false,
        data: {},
      });
    });
};

const Delete = (req, res) => {
  const id = req.params.id;

  Products.deleteOne({ _id: id })
    .then((num) => {
      if (num) {
        return res.send({
          message: "Product was deleted successfully!",
          success: true,
          data: {},
        });
      } else {
        return res.send({
          message: `Cannot delete Product `,
          success: false,
          data: {},
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete Product with id=" + id,
        success: false,
        data: {},
      });
    });
};
module.exports = {
  addproducts,
  getproducts,
  uploadImg,
  Delete,
  updateProduct
};
