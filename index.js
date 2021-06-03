// index.js
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const mung = require('express-mung');
const todoRouter = require('./src/todoRouter');

const app = express();

// Add body-parser middleware to automatically parse JSON requests
app.use(bodyParser.json());
// Requests done to the base path /todo should go through the todoRouter
app.use(mung.json(

  (body) => {
    const body2 = {

      res: 'ok',
      data: body,
    };
    return body2;
  },
));

app.use('/todos', todoRouter);

const startApplication = async () => {
  console.log();

  await mongoose.connect(`mongodb+srv://andy:${process.env.PW}@cluster0.ixw6l.mongodb.net/todos?retryWrites=true&w=majority`,
    {

      useNewUrlParser: true,
      useUnifiedTopology: true,

    });


    
  console.log(
    'Successfully connected to MongoDB at: mongodb',
  );
  console.log();
  await app.listen(process.env.PORT);
  console.log(`Listening on port ${process.env.PORT}`);
};

startApplication();
