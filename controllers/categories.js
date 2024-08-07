const Category = require('../database/models/category');
const slugify = require('slugify');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const { itemType, itemName } = req.body;

        const randomComponent = Date.now().toString(); // You can replace this with your own logic
        const customIdentifer = `${slugify(itemType, { lower: true })}-${randomComponent}`;

        const category = new Category({
            itemType,
            itemName,
            customIdentifer,
        });

        const categoryData = await category.save();

        res.status(201).json(categoryData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// List all categories
exports.listCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// Get a category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const { customIdentifier } = req.params;

        const category = await Category.findById({ customIdentifer: customIdentifier });

        if (!category) {
            return res.status(404).send('Category not found');
        }

        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
