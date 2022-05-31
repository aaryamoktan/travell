const express = require("express");
const mongoose = require("mongoose");
const app =express();
const product = require("./routes/product")
mongoose.connect("mongodb://localhost:27017/aarya")
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require("./routes/reg"))

app.listen("5000",()=>
{
    console.log("connected")
});