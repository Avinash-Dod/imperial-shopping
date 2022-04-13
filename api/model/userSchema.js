const mongoose = require("mongoose");
const userSchmea = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  phone: {
    type: Number,
    minlength: 10,
  },

  
});

// module.exports = mongoose.model("user", userSchmea);
module.exports = User = mongoose.model("users", userSchmea);
