const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const logger = require("morgan");
require('dotenv').config()
//imports route for mongo updates/quries
const bookRoute = require('./routes/bookRoute');

const PORT = process.env.PORT || 3001;

const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks";
mongoose.connect(MONGODB_URI);

app.use( bookRoute);

app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
  });