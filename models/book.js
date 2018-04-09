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
  let newBook = {
    id: uuid(),
    name: req.body.name,
    borrowed: req.body.borrowed,
    description: req.body.description,
    author_ids: []
  };
  books.push(newBook);
  let currentBooksJSON = JSON.stringify(books);
  fs.writeFileSync(booksPath, currentBooksJSON);
  return newBook;
}

// Update a new book
const update = (req) => {
  let bookArr = books.filter(book => book.id === req.params.id);
  let book = bookArr[0];
    book.name = req.body.name || book.name,
    book.borrowed = JSON.parse(req.body.borrowed) || book.borrowed,
    book.description = req.body.description || book.description
  let updatedBooksJSON = JSON.stringify(books);
  fs.writeFileSync(booksPath, updatedBooksJSON);
  return book;
}

const destroy = (req) => {
  let bookArr = books.filter(book => book.id === req.params.id);
  let book = bookArr[0];
  let bookIndex = books.map(book => {
    return book.id;}).indexOf(book.id);
  books.remove(bookIndex)
  return books;
}

module.exports = {
  showAll,
  create,
  showOne,
  update,
  destroy
}
