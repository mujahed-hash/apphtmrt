const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const middleware = require('../helper/middleware');
const roleMiddleware = require('../helper/roles')
const User = require('../database/models/user');
const Category = require('../database/models/category');
const Order = require('../database/models/order');
const Product = require('../database/models/product');
const Requirement = require('../database/models/requirements');
const ProductSubmission = require('../database/models/productsubmission');
// Enable text indexes for partial search across multiple fields
Category.createIndexes({ itemType: 'text', itemName: 'text', customIdentifer: 'text' });
Product.createIndexes({ prodName: 'text', prodDesc: 'text', customIdentifer: 'text' });
Order.createIndexes({ customIdentifer: 'text', 'shippingAddress.street': 'text', 'shippingAddress.city': 'text' });
Requirement.createIndexes({ reqDetails: 'text', customIdentifier: 'text' });
User.createIndexes({ name: 'text', email: 'text', customIdentifer: 'text' });
ProductSubmission.createIndexes({ name: 'text', price: 1, status: 'text' });  // New Index
router.get('/admin/search', middleware.verifyToken, roleMiddleware('isAdmin'),  async (req, res) => {
    try {
        const { query, start = 0, limit = 10 } = req.query;

        if (!query) {
            return res.status(400).json({ message: 'Search query is required.' });
        }

        const regex = new RegExp(query, 'i');  // Case-insensitive regex for partial matching

        // Search in multiple collections with OR logic
        const [categories, products, orders, users, requirements] = await Promise.all([
            Category.find({ $or: [{ itemType: regex }, { itemName: regex }, { customIdentifer: regex }] }),
            Product.find({ $or: [{ prodName: regex }, { prodDesc: regex }, { customIdentifer: regex }] })
                .populate('category', 'itemName itemType')
                .select('prodName prodDesc prodPrice isFeatured date'),
            Order.find({ $or: [{ customIdentifer: regex }, { 'shippingAddress.street': regex }, { 'shippingAddress.city': regex }] })
                .populate('user', 'name email')
                .select('totalPrice status date'),
            User.find({ $or: [{ name: regex }, { email: regex }, { customIdentifer: regex }] })
                .select('name email isAdmin isBuyer isSupplier date'),
            Requirement.find({ $or: [{ reqDetails: regex }, { customIdentifier: regex }] })
                .populate('buyer', 'name')
                .select('reqDetails status date'),
                ProductSubmission.find({ $or: [{ name: regex }, { status: regex }] })  // Search Product Submissions
                .populate('supplier', 'name email')
                .select('name price status date')
        ]);

        // Collect all results and paginate them
        const results = [...categories, ...products, ...orders, ...users, ...requirements];
        const paginatedResults = results.slice(start, start + limit);

        res.status(200).json({
            totalResults: results.length,
            results: paginatedResults
        });

    } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
