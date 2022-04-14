const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.post("/add", productController.addproducts);
router.get("/s", productController.getproducts);


module.exports = router;