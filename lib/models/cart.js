'use strict'
const mongoose = require('mongoose')

const autoIncrement = require('mongoose-auto-increment')
mongoose.Promise = Promise

const Schema = mongoose.Schema

const cartSchema = Schema({

  date: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  TotalQty: {
    type: Number,
    default: 1
  },
  TotalPrice: {
    type: Number
  },
  books: [{
    type: Number,
    ref: 'Book'
  }]

})
cartSchema.plugin(autoIncrement.plugin, 'Cart')
const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart
