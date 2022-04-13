const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

//  the blank route addres will gave in app .js file  here ist by defaul /student
router.get("/", studentController.NewStudent);
// find by id  from database functionality  write in get section before the post req
router.get("/:id", studentController.studentfind);

router.post("/", studentController.addstudnet);

// delete by id router
router.delete("/:id", studentController.deleteStudent);

// find by id and update the thing you want
router.put("/:id", studentController.updateStudent);

module.exports = router;
