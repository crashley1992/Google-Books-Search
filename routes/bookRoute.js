const express = require('express');
const logger = require("morgan");
const mongoose = require('mongoose');

const router = express.Router();

 const db = require('../models');

router.get("/api/books", (req, res) => {
//queries for book in mongo and sorts by most recent 
  db.Books.find().sort({timestamp: -1})
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/books", (req, res) => {
  console.log(req.body);
  db.Books.create(req.body)
    .then((dbBooks) => {
      return db.Books.findByIdAndUpdate({ _id: books.id }, {title: book.title}, { synopsis: book.synopsis }, { new: true });
    })
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.json(err);
    });
  });
// Route for grabbing a specific book by id
router.get("/api/books/:id", (req, res) => {
  db.Books.findById({ _id: req.params.id }, {title: book.title}, { synopsis: book.synopsis }, { new: true })
    .populate("saved")
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.json(err);
    });
});
  
    router.put("/api/books/:id", (req, res) => {
      console.log(req.body);
      db.Books.remove(req.body)
        .then((dbBooks) => {
          return db.dbBooks.findByIdAndUpdate({ _id: books.id }, { new: false });
        })
        .then((dbBooks) => {
          res.json(dbBooks);
        })
        .catch((err) => {
          res.json(err);
        });
    });
  
module.exports = router;