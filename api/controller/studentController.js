const mongoose = require("mongoose");
const Student = require("../model/studentSchema");

const NewStudent = (_req, res) => {
  Student.find()
    .then((result) => {
      res.status(200).json({
        studentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
const studentfind = (req, res) => {
  console.log(req.params.id);
  Student.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        student: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const addstudnet = (req, res) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });
  // save the details of student in data base
  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newStudent: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
const deleteStudent = (req, res) => {
  Student.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "student deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
const updateStudent = (req, res) => {
  console.log(req.params.id);
  {
    useFindAndModify: false;
  }
  Student.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        message: "student Updated",
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
module.exports = {
  NewStudent,
  studentfind,
  addstudnet,
  deleteStudent,
  updateStudent,
};
