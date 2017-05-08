// Get dependencies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
mongoose.Promise = Promise
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)

// mongoose.connect('mongodb://localhost:27017/data2')
const autoIncrement = require('mongoose-auto-increment')
const connection = mongoose.connect('mongodb://root:root@ds133221.mlab.com:33221/bookstore-database')
autoIncrement.initialize(connection)

const app = express()
app.use(require('cors')())
// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Cross Origin middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(cookieParser())
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
  // cookie: {maxAge: 180 * 60 * 1000 }
}))


// Set our api routes
// app.use('/api', api)
app.use('/api', require('./lib/routes/book'))
app.use('/api', require('./lib/routes/client'))
app.use('/api', require('./lib/routes/category'))
app.use('/api', require('./lib/routes/cart'))

app.use((req, res, next) => {
  res.locals.session = req.session
  next()
})


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000'
app.set('port', port)

/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Book Store API running on localhost:${port}`))
