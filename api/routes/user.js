const express = require("express");
const router = express.Router();

const userController = require("../controller/usercontroller");

router.post("/signup", userController.uploadImg, userController.registerUser);

// getting all the users from tha database
 router.get("/signup", userController.getUserList);
// login route
router.post("/login", userController.loginUser);

module.exports = router;
