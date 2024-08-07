const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories');
const roleMiddleware = require('../helper/roles')
const middleware = require('../helper/middleware');

// Create a new category
router.post('/category',middleware.verifyToken, roleMiddleware('isAdmin'), categoryController.createCategory);

// List all categories
router.get('/categories', categoryController.listCategories);

// Get a category by ID
router.get('/category/:customIdentifer', categoryController.getCategoryById);

module.exports = router;
