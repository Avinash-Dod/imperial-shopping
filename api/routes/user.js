const express = require("express");
const router = express.Router();

const userController = require("../controller/usercontroller");
//registering user
router.post("/signup", userController.uploadImg, userController.registerUser);
//deleting user
router.delete("/delete/:id", userController.Delete);
//update user details
router.put("/update/:id",userController.updateUser)
// getting all the users from tha database
 router.get("/userlist", userController.getUserList);
// login route for user
router.post("/login", userController.loginUser);

module.exports = router;
