const express = require("express");
const router = express.Router();

const adminController = require("../controller/adminController");
//registering user
router.post("/signup", adminController.uploadImg, adminController.registerUser);
//deleting user
router.delete("/delete/:id", adminController.Delete);
//update user details
router.put("/update/:id",adminController.updateUser)
// getting all the users from tha database
 router.get("/adminlist", adminController.getUserList);
 //find user by id
 router.get("/fadmin/:id", adminController.findUser);
// login route for user
router.post("/login", adminController.loginUser);

module.exports = router;
