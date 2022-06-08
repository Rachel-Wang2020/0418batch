import express from "express";
// const express = require("express");
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("connected to DB");
//user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//routes routes
app.post("/Login", (req, res) => {
  console.log("test22");
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
});
app.post("/Register", (req, res) => {
  // console.log(req.body)
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    console.log(req.body);
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new User({ email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          console.log("sucessfull");
          res.send({ message: "sucessfull" });
        }
      });
    }
  });
});

app.listen(8080, () => {
  console.log("started");
});
