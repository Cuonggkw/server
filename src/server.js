require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectDB");
const apiRoutes = require("./route/api");
const cors = require("cors");

let app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/restautant.com/v1/api", apiRoutes);

connectDB();

app.use((req, res) => {
  return res.send("404 not found");
});

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Backend Nodejs is running on the port: " + port);
});
