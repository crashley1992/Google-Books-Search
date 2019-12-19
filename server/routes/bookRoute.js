const express = require('express');
const logger = require("morgan");
const mongoose = require('mongoose');

const router = express.Router();

 const db = require('../models');

router.get("/api/books", (req, res) => {
//queries for articles in mongo and sorts by most recent 
  db.Books.find().sort({timestamp: -1})
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/books", (req, res) => {
  res.json({ posted: true });
});
// Route for grabbing a specific Article by id
router.get("/api/books/:id", (req, res) => {
  db.Books.findById({ _id: req.params.id })
    .populate("saved")
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.json(err);
    });
});
  
    router.put("/articles/:id", (req, res) => {
      console.log(req.body);
      db.Books.remove(req.body)
        .then((dbBooks) => {
          return db.Article.findByIdAndUpdate({ _id: req.params.id }, { new: true });
        })
        .then((dbBooks) => {
          res.json(dbBooks);
        })
        .catch((err) => {
          res.json(err);
        });
    });
    
module.exports = router;