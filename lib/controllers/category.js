'use strict'
let category = require('../models/category')

module.exports = {

        // fetch all categories
  getCategories: (req, res) => {
    var response = {}
    category.find({isDeleted: 0})
        .populate('books')
        .exec((err, data) => {
        // Mongo command to fetch all data from collection.
          if (err) {
            response = {'error': true, 'message': 'Error fetching data'}
          } else {
            response = data
          }
          res.json(response)
        })
  },
  getCategoryByName: (req, res) => {
    var response = {}
        // we specifie the interval of price by req
    category.findOne({name: req.params.name}, (err, data) => {
      if (err) {
        response = {'error': true, 'message': 'Error fetching data'}
      } else {
        response = data
      }
      res.json(response)
    })
  },
// insert a category
  addCategory: (req, res) => {
    let db = new category(req.body)
    var response = {}
    db.save(function (err) {
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
      if (err) {
        return res.send(err)
      } else {
        response = {'error': false, 'message': 'Data added'}
      }
      res.json(response)
    })
  },
// fetch a category by id
  getCategory: (req, res) => {
    var response = {}
    category.findOne({_id: req.params._id}, (err, category) => {
        // Mongo command to fetch all data from collection.
      if (err) {
        response = {'error': true, 'message': 'Error fetching data'}
      } else {
        response = category
      }
      res.json(response)
    })
  },
  updateCategory: (req, res) => {
    var response = {}
    category.findOneAndUpdate({ name: req.params.name }, req.body, function (err, category) {
      if (err) return res.status(400).json(err)

      else {
        response = category
      }
      res.json(response)
    })
  },
  deleteCategory: (req, res) => {
    var response = {}
    category.findOneAndUpdate({ name: req.params.name }, req.body, function (err, category) {
      if (err) return res.status(400).json(err)

      else {
        response = category
      }
      res.json(response)
    })
  }

}
