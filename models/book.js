const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');

// Paths to relevant files and directories
const booksPath = path.join(__dirname, '..', 'data', 'books.json');
const booksJSON = fs.readFileSync(booksPath, 'utf8');
const books = JSON.parse(booksJSON);

// Show all books
const showAll = () => {
  return books;
}

// Show individual book
const showOne = (req) => {
  return books.filter(book => book.id === req.params.id);
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
