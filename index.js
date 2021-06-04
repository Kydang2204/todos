// index.js
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const mung = require('./src/mung');
const todoRouter = require('./src/todoRouter');

const app = express();
app.use(bodyParser.json());

app.use(mung);

app.use('/todos', todoRouter);

mongoose.connect(`mongodb+srv://andy:${process.env.PW}@cluster0.ixw6l.mongodb.net/todos?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Successfully connected to MongoDB at: mongodb');
app.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`);
