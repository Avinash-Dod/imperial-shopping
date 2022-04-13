const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.post("/s", productController.addproducts);
router.get("/p", productController.getproducts);


module.exports = router;