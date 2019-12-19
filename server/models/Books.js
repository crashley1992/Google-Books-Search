const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    }
});

const Books = mongoose.model('Books', BooksSchema);

module.exports = Books;