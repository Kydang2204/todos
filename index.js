// index.js
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./src/todoRouter");
const mung= require('express-mung');

const app = express();

// Add body-parser middleware to automatically parse JSON requests
app.use(bodyParser.json());
// Requests done to the base path /todo should go through the todoRouter
app.use(mung.json(

  (body,req,res)=>{
    const body2={
      'res' : 'ok',
      'data':body}
   return body2;
  }));

app.use("/todos", todoRouter);

const startApplication = async(body) => {
   
   await mongoose.connect("mongodb+srv://andy:andy123@cluster0.ixw6l.mongodb.net/todos?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    "Successfully connected to MongoDB at: mongodb"
  );
  await app.listen(8000);
  console.log("Listening on 8000...");
};

startApplication();
