const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const logger = require("morgan");
const path = require('path');

require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3001;

//imports route for mongo updates/quries
const bookRoute = require('./routes/bookRoute');

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/GoogleBooks";
mongoose.connect(MONGODB_URI);

app.use(bookRoute);

app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
  });