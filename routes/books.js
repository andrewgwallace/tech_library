const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');

// Books controller
const booksController = require('../controllers/books');
// Books data path
const booksPath = path.join(__dirname, '..', 'data', 'books.json');

//READ (All)
router.get('/', booksController.readAll);

// READ (Individual)
// router.get('/:id', booksController.read);

//CREATE
router.post('/', booksController.create);

//UPDATE


//DELETE



module.exports = router;
