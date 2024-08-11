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
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params; // Get the category ID from the URL
        const { itemType, itemName } = req.body; // Get updated data from the request body

        // Validate that all required fields are present
        if (!itemType) {
            return res.status(400).json({ message: 'ItemType is required.' });
        }

        // Find the category by ID and update it
        const updatedCategory = await Category.findByIdAndUpdate(
            id, // Find the category by ID
            { itemType, itemName }, // Fields to update
            { new: true, runValidators: true } // Return the updated document and validate it
        );

        // Check if the category was found and updated
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found.' });
        }

        // Return the updated category data
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.body;
        
        const result = await Category.findByIdAndDelete(id);
        
        if (!result) {
            return res.status(404).json({ message: 'Category not found' });
        }
        
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};