const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category')
// declare axios for making http requests

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
})

// Get all categories
router.get('/categories', categoryController.getCategories)
.post('/categories', categoryController.addCategory)
.get('/categories/:_id', categoryController.getCategory)
.get('/categories/:name/category', categoryController.getCategoryByName)
.put('/categories/:name/delete', categoryController.deleteCategory)
.put('/categories/:name/update', categoryController.updateCategory)
module.exports = router
