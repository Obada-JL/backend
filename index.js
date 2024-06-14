require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const unisController = require("./Controllers/unisController");

app.get("/api/unis", (req, res) => {
  unisController.getUnis(req, res);
});
app.get("/api/uniSearch", (req, res) => {
  unisController.getUni(req, res);
});

app.all("*", (req, res) => {
  try {
    res.status(500).json({ message: req });
  } catch (err) {
    res.status(500).json({ message: err });
  }
  // console.log("Resource not found");
  // res.status(404).json({ message: "Resource not found" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
