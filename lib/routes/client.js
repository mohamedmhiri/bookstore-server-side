'use strict'
const express = require('express')
const router = express.Router()
const clients = require('../controllers/client')

// client routes

router.get('/clients', clients.getClients)
.post('/clients', clients.addClient)
.get('/clients/:_id/client', clients.getClientById)
.get('/clients/:name', clients.getClientByName)
.put('/clients/:name/delete', clients.deleteClient)
.put('/clients/:name/update', clients.updateClient)
// export router
module.exports = router
