const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../model/userSchema");

// uloading image with  registration page and storing image locally
const multer = require("multer");
const { application } = require("express");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("Image");
// user registration functionality

const registerUser = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("That user already exisits!");
  }
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const { username, email, phone, password, confirmPassword } = req.body;

    if (!username || !password || !confirmPassword || !email || !phone) {
      return res.status(500).json({
        error: "INVALID CREADINTIALS",
      });

      // checking if user is already registered end
    } else {
      let user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: hash,
        confirmPassword: hash,
        email: req.body.email,
        phone: req.body.phone,
        // Image: req.file.path,
      });

      // confirm password functionality
      if (password !== confirmPassword) {
        throw new Error("Passwords must be same");
      } else {
        user
          .save()
          .then((result) => {
            res.status(200).json({
              responceData: result,
              msg: "user added successfuly",
            });
          })
          .catch((_err) => {
            res.status(500).json({
              responceData: user,
              msg: "failed to add user",
            });
          });
      }
    }
  });
};

// get user list from db only for admin section
const getUserList = async (_req, res) => {
  User.find({})
    // .populate("user")

    .then(function (users) {
      res.send(users);
    });
};

// login user  functionality
const loginUser = (req, res) => {
  User.find({ username: req.body.username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          msg: "user not exist",
        });
      }
      // paasword matching functionality
      bcrypt.compare(req.body.password, user[0].password, (_err, result) => {
        if (!result) {
          return res.status(401).json({
            // message for wrong paasword
            msg: "Wrong password",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user[0].username,
              email: user[0].email,
              phone: user[0].phone,
            },
            // this is secret key
            "this is dummy text",
            {
              expiresIn: "24h",
            }
          );
          res.status(200).json({
            // username: user[0].username,
            // email: user[0].email,
            // phone: user[0].phone,
            token: token,
            responceData: user,
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({
        responceData: result,
        msg: "success",
        error: true,
      });
    });
};
// exporting the controller modules

module.exports = {
  registerUser,
  loginUser,
  getUserList,
  uploadImg,
};