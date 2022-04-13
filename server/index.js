
const PORT = process.env.PORT || 5000;
const path = require('path');
const express = require('express');
const app = express();

//routes
const UserRoute = require("../api/routes/user");
const ProductRoute=require("../api/routes/product")
//body parser
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//body parser middleware

// routes after /

app.use("/user", UserRoute);
app.use("/product", ProductRoute);



app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Authorization", "token");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     if (req.method === 'OPTIONS') {
         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
         return res.status(200).json({});
     }
     next();
});
//Mongo connectivity
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://avinash06111:8989084940@cluster0.zs92n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.on("error", (_err) => {
  console.log("connection failed");
});
mongoose.connection.on("connected", (_connected) => {
  console.log("connected with mongoDb ....");
});



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route


// bad url req error


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

//port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
module.exports = app;
