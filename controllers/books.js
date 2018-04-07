const fs = require('fs');
const path = require('path');

const bookModel = require('../models/book')
const booksPath = path.join(__dirname, '..', 'data', 'books.json');

// Read all books
const readAll = (req, res) => {
  const books = bookModel.readAll();
  res.send(books);
};

// Create a new book
const create = (req, res) => {
  const newBook = bookModel.create(req, res);
  res.send(newBook);
}










module.exports = {
  readAll,
  create
}
