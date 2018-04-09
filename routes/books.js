const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');

// Books controller
const booksController = require('../controllers/books');
// Books data path
const booksPath = path.join(__dirname, '..', 'data', 'books.json');

//Show (All)
router.get('/', booksController.showAll);

// Show (Individual)
router.get('/:id', booksController.showOne);

//CREATE
router.post('/', booksController.create);

//UPDATE
router.put('/:id', booksController.update);

//DESTROY
router.delete('/:id', booksController.destroy);


module.exports = router;
