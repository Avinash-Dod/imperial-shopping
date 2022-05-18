const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.post("/addProducts", productController.addproducts);
router.get("/getProducts", productController.getproducts);

router.delete("/delete/:id", productController.Delete);
router.put("/update/:id", productController.updateProduct);

module.exports = router;