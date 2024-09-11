const express = require('express');
const router = express.Router();
const Category = require('../database/models/category');
const Product = require('../database/models/product');
const Cart = require('../database/models/cart');

// Search Route
// Search Route with Pagination
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query; // The search query
        const start = parseInt(req.query.start) || 0; // Pagination start
        const limit = parseInt(req.query.limit) || 10; // Pagination limit
        const userId = req.userId; // Assuming userId is available

        let products;
        let categoryIds = []; // Define categoryIds here

        if (query) {
            // Find categories that match the itemType
            const categories = await Category.find({ itemType: { $regex: query, $options: 'i' } }).exec();
            categoryIds = categories.map(category => category._id);

            // Search for products by prodName, prodDesc, or category
            products = await Product.find({
                $or: [
                    { $text: { $search: query } }, // Search in prodName and prodDesc
                    { category: { $in: categoryIds } } // Search by category itemType
                ]
            })
            .populate('category', 'itemName itemType')
            .select('prodName prodDesc customIdentifer images prodPrice countInStock prodSize isFeatured date')
            .skip(start)
            .limit(limit)
            .sort({ date: -1 });
        } else {
            products = [];
        }

        // Fetch the user's cart
        const cart = await Cart.findOne({ user: userId });

        // Check if each product is in the user's cart
        const productsWithCartStatus = products.map(product => {
            const productId = product._id.toString();
            const itemIndex = cart ? cart.items.findIndex(item => item.product.toString() === product._id.toString()) : -1;
            const isInCart = itemIndex !== -1;

            return {
                ...product._doc,
                inCart: isInCart
            };
        });

        // Total number of matching products in the database
        const totalProducts = await Product.countDocuments({
            $or: [
                { $text: { $search: query } },
                { category: { $in: categoryIds } }
            ]
        });

        // Send the response with total products and the modified products array
        res.status(200).json({
            totalProducts,
            products: productsWithCartStatus
        });
    } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;