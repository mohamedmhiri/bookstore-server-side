'use strict'
let client = require('../models/client')

module.exports = {

        // fetch all categories
  getClients: (req, res) => {
    var response = {}
    client.find({})
       // .populate('command')
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
  getClientByName: (req, res) => {
    var response = {}
        // we specifie the interval of price by req
    client.findOne({name: req.params.name}, (err, data) => {
      if (err) {
        response = {'error': true, 'message': 'Error fetching data'}
      } else {
        response = data
      }
      res.json(response)
    })
  },
// insert a client
  addClient: (req, res) => {
    let db = new client(req.body)
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

// fetch a client by id
  getClientById: (req, res) => {
    var response = {}
    client.findOne({_id: req.params._id}, (err, client) => {
        // Mongo command to fetch all data from collection.
      if (err) {
        response = {'error': true, 'message': 'Error fetching data'}
      } else {
        response = client
      }
      res.json(response)
    })
  },

  updateClient: (req, res) => {
    var response = {}
    client.findOneAndUpdate({ name: req.params.name }, req.body, function (err, client) {
      if (err) return res.status(400).json(err)

      else {
        response = client
      }
      res.json(response)
    })
  },

  deleteClient: (req, res) => {
    var response = {}
    client.findOneAndUpdate({ name: req.params.name }, req.body, function (err, client) {
      if (err) return res.status(400).json(err)

      else {
        response = client
      }
      res.json(response)
    })
  }

}
