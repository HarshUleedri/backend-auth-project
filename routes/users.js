const e = require("express");
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/auth");

const userModel = mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

userModel.plugin(plm);

module.exports = mongoose.model("users", userModel);
