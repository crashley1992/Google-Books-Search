const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String,
    },
    authors: {
        type: String
    },
    synopsis: {
        type: String
    },
    thumbnail: {
        type: String
    }, 
    link: {
        type: String
    },
    date: {
        type: Date, default: Date.now
      }
});

const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;