const fs = require('fs');
const path = require('path');
const uuid = require('uuid/v1');

// Paths to relevant files and directories
const booksPath = path.join(__dirname, '..', 'data', 'books.json');
const booksJSON = fs.readFileSync(booksPath, 'utf8');


// Read all books
const readAll = () => {
  return JSON.parse(booksJSON);
}

// Create a new book
const create = (req) => {
  let currentBooks = JSON.parse(booksJSON);
  let newBook = {
    id: uuid(),
    name: req.body.name,
    borrowed: false,
    description: req.body.description,
    author_ids: []
  };
  currentBooks.push(newBook);
  let currentBooksJSON = JSON.stringify(currentBooks);
  fs.writeFileSync(booksPath, currentBooksJSON);
  return newBook;
}

module.exports = {
  readAll,
  create/*, read, update, destroy */
}
