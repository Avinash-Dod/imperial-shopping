const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController");
//registering Admin
router.post("/signup", adminController.uploadImg, adminController.registerAdmin);
//deleting Admin
router.delete("/delete/:id", adminController.Delete);
//update Admin details
router.put("/update/:id",adminController.updateAdmin)
// getting all the Admins from tha database
 router.get("/adminList", adminController.getAdminList);
 //find Admin by id
 router.get("/fadmin/:id", adminController.findAdmin);
// login route for Admin
router.post("/login", adminController.loginAdmin);

module.exports = router;
