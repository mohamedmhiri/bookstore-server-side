'use strict'
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

// var db=mongoose.connection;
// const validator = require('validator')
// mongoose.connect('mongodb://localhost:27017/data')
mongoose.Promise = Promise

const Schema = mongoose.Schema

const bookSchema = Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: false
  },
  editionDate: {
    type: String,
    required: false
  },
  recentPrice: {
    type: Number,
    required: false
  },
  oldPrice: {
    type: Number,
    required: false
  },
  availableBooks: {
    type: Number,
    required: false
  },
  inMarket: { // stock
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  edition: {
    type: String,
    required: false
  },
  isDeleted: {
    type: Number,
    default: 0,
    min: 0,
    max: 1
  },
  commands: [{
    type: Number,
    ref: 'Command'
  }],
  category: {
    type: Number,
    ref: 'Category'
  },
  carts: [{
    type: Number,
    ref: 'Cart'
  }]
})

// userSchema.pre('save', function (next) {
//   if (!this.isModified('password')) {
//     return next()
//   }
//     // If the user changed its password, we need to rehash
//   this.password = User.encryptPassword(this.password)
//   next()
// })
//
// userSchema.methods = {
//   validPassword: function (password) {
//     return bcrypt.compareSync(password, this.password)
//   }
// }
//
// userSchema.statics = {
//   makeSalt: function () {
//     return bcrypt.genSaltSync(10)
//   },
//   encryptPassword: function (password) {
//     if (!password) {
//       return ''
//     }
//     return bcrypt.hashSync(password, User.makeSalt())
//   },
//   register: function (email, password, cb) {
//     var user = new User({
//       email: email,
//       password: password
//     })
//     user.save(function (err) {
//       cb(err, user)
//     })
//   }
// }

bookSchema.plugin(autoIncrement.plugin, 'Book')
const Book = mongoose.model('Book', bookSchema)

// User.schema.path('email').validate(function (email) {
//   return validator.isEmail(email)
// })
//
// User.schema.path('password').validate(function (password) {
//   return validator.isLength(password, 6)
// })

module.exports = Book
