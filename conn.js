const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myFriend")
.then(()=>{console.log("Database connected successfully")})
.catch((err)=>{console.log(err)});