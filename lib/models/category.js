'use strict'
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
mongoose.Promise = Promise

// const validator = require('validator')
const Schema = mongoose.Schema

const categorySchema = Schema({

  name: {
    type: String
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  books: [{
    type: Number,
    ref: 'Book'
  }]
})

categorySchema.plugin(autoIncrement.plugin, 'Category')
const Category = mongoose.model('Category', categorySchema)
module.exports = Category
