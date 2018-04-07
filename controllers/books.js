const fs = require('fs');
const path = require('path');

const bookModel = require('../models/book')
const booksPath = path.join(__dirname, '..', 'data', 'books.json');

// Read all books
const showAll = (req, res) => {
  const books = bookModel.showAll();
  res.send(books);
};

// Read individual
const read = (req, res) => {
  const book = bookModel.read();
  res.send(book);
};


// Create a new book
const create = (req, res) => {
  const newBook = bookModel.create(req, res);
  res.send(newBook);
}










module.exports = {
  showAll,
  create,
  // read
}
