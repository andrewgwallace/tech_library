const fs = require('fs');
const path = require('path');

const bookModel = require('../models/book')
const booksPath = path.join(__dirname, '..', 'data', 'books.json');
const books = bookModel.showAll();

// Show all books
const showAll = (req, res) => {
  res.send(books);
};

// Show individual
const showOne = (req, res) => {
  const book = bookModel.showOne(req);
  res.send(book);
};

// Create a new book
const create = (req, res) => {
  const newBook = bookModel.create(req);
  res.send(newBook);
}

// Update a book
const update = (req, res) => {
  let book = bookModel.update(req);
  res.send(book);
}


module.exports = {
  showAll,
  create,
  showOne,
  update
}
