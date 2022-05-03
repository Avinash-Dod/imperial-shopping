const express = require("express");
const router = express.Router();

const orderController = require("../controller/orderController");
//get orderlist
 router.get("/orderlist", orderController.getOrder);
//save order
router.post("/saveOrder", orderController.addOrder);
//delete order
router.post("/delOrder/:id", orderController.deleteOrder);
//edit order
router.put("/updateOrder/:id",orderController.updateOrder)
module.exports = router;
