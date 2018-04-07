const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');

// Paths to relevant files and directories
const booksPath = path.join(__dirname, '..', 'data', 'books.json');
const booksJSON = fs.readFileSync(booksPath, 'utf8');
let books = JSON.parse(booksJSON);

// Show all books
const showAll = () => {
  return books;
}

// Show individual book
const showOne = (req, res) => {
  const book = books[req.params.id];
  return book;
}

// Create a new book
const create = (req) => {
  // let currentBooks = JSON.parse(booksJSON);
  let newBook = {
    id: uuid(),
    name: req.body.name,
    borrowed: false,
    description: req.body.description,
    author_ids: []
  };
  books.push(newBook);
  let currentBooksJSON = JSON.stringify(books);
  fs.writeFileSync(booksPath, currentBooksJSON);
  return newBook;
}

module.exports = {
  showAll,
  create,
  showOne /*update, destroy */
}
