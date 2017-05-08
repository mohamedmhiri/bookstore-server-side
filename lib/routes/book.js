'use strict'
const express = require('express')
const router = express.Router()
const books = require('../controllers/book')

// books routes

router.get('/books', books.getAllBooks)
.post('/books', books.createBook)
.get('/books/:_id/book', books.findBookById)
.get('/books/:name', books.FindBookByName)
.get('/books/:ids/many', books.getMany)
// .get('/books/:name/:category',books.FindBookByNameOrCategoryOrAuthorOrPriceOrEditionOrEditionDate)
.post('/books/advancedSearch', books.FindBookByNameOrCategoryOrAuthorOrPriceOrEditionOrEditionDate)
.post('/books/rapidSearch', books.FindBookRapidSearch)
.put('/books/:name/delete', books.deleteBook)
.put('/books/:name/update', books.updateBook)
// export router
module.exports = router
