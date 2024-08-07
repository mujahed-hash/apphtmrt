const Product = require('../database/models/product');
const User = require('../database/models/user');
const slugify = require('slugify');
const mongoose = require('mongoose');
const Category = require('../database/models/category')
const { ObjectId } = require('mongodb');
const category = require('../database/models/category');

exports.productPost = async (req, res) => {
    try {
        // Get the user's ID from the token (req.user)
        const userId = req.user.id;
        // const category = await Category.findOne({ customIdentifer: req.body.catCustomIdentifer });

   
        // Log the entire request body for debugging purposes
        // console.log('Request Body:', req.body);

        const { prodName, prodDesc, category,prodPrice, countInStock, prodSize } = req.body;
        console.log('Category:', category); // Log category to see if it's being received correctly
        if (!category) {
            return res.status(500).json({ error: 'Invalid category custom identifier' });
        }
        const files = req.files;
        let images = [];
        const basePath = `${req.protocol}://${req.get('host')}/uploads/products`;

        if (files && files.length > 0) {
            files.forEach(file => {
                images.push(`${basePath}/${file.filename}`);
            });
        }

        const randomComponent = Date.now().toString(); // You can replace this with your own logic
        const customIdentifer = `${slugify(prodName, { lower: true })}-${randomComponent}`;
        const post = new Product({
            category: category, // Using the found category ID
            user: req.userId, // Set the user's ID for the post
            prodName,
            prodDesc,
            customIdentifer,
            images: images,
            prodPrice,
            countInStock,
            prodSize
        });

        const postData = await post.save();
        console.log("Post Data ID:", postData._id); // Log Post Data ID

        await User.findByIdAndUpdate(
            req.userId,
            { $push: { posts: postData._id } },
            { new: true } // Return the updated document
        );

        res.status(200).json(postData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
};

exports.createProduct = async (req, res) => {
    const category = await Category.findOne({ customIdentifer: req.body.catCustomIdentifer });

    if (!category) {
        return res.status(500).json({ error: 'Invalid category custom identifier' });
    }

    const files = req.files;
    let images = [];
    const basePath = `${req.protocol}://${req.get('host')}/uploads/products`;

    if (files) {
        files.map(file => {
            images.push(`${basePath}/${file.filename}`);
        });
    }

    let product = new Product({
        prodName: req.body.prodName,
        prodDesc: req.body.prodDesc,
        images: images,
        prodPrice: req.body.prodPrice,
        category: category._id, // Using the found category ID
        countInStock: req.body.countInStock,
        customIdentifer: req.body.customIdentifer,
        dateCreated: req.body.dateCreated,
        user: req.userId
    });

    try {
        const products = await product.save();
        res.status(201).send(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllProducts = async (req, res) => {
    try {
        const start = parseInt(req.query.start) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const userId= req.userId;

        const products = await Product.find().sort({date:-1}).populate('category').populate('user').skip(start)
        .limit(limit);

        const totalProducts = await Product.countDocuments({ userId: userId });

        res.status(200).json({
            totalProducts,
            products
        });

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
exports.getProductsCountforSupplier = async (req, res) => {
    try {
      const userId = req.userId; // Ensure this is correct based on your token payload
  
      const prodCount = await Product.find({ user: userId }).countDocuments();
  
      res.status(200).json({ count: prodCount });
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).send('Error occurred: ' + error.message);
    }
  };
  exports.getProductsCountforAmin = async (req, res) => {
    try {
  
      const prodCount = await Product.find().countDocuments();
  
      res.status(200).json({ count: prodCount });
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).send('Error occurred: ' + error.message);
    }
  };
exports.getProductsByUser = async (req, res) => {
    try {
        // Access the user ID from req.user
        const userId = req.userId; // Ensure this is correct based on your token payload
        const start = parseInt(req.query.start) || 0;
        const limit = parseInt(req.query.limit) || 10;
        // Validate ObjectId
        if (!mongoose.isValidObjectId(userId)) {
            console.log(userId)

            return res.status(400).send('Invalid user ID.');
        }
        const totalProducts = await Product.countDocuments({ userId: userId });

        // Query products by user ID
        const products = await Product.find({ user: userId }).sort({date:-1}).select('prodName images prodPrice customIdentifer')     .skip(start)
        .limit(limit);;
        if (!products.length) {
            return res.status(404).send('No products found for this user.');
        }

        // res.status(200).json(products);
        res.status(200).json({
            totalProducts,
            products
        });
    } catch (error) {
        res.status(500).send('Server error: ' + error.message);
    }
};

// Fetch paginated products
// Fetch products with infinite scrolling
// exports.getProducts = async (req, res) => {
//     try {
//         // Get start and limit from query parameters
//         const start = parseInt(req.query.start) || 0; // Default to 0
//         const limit = parseInt(req.query.limit) || 10; // Default to 10 products per request

//         // Ensure limit is a positive number
//         if (limit <= 0) {
//             return res.status(400).json({ error: 'Limit must be a positive number' });
//         }

//         // Fetch products with limit and start
//         const products = await Product.find()
//             .skip(start)
//             .limit(limit);

//         // Count total products
//         const totalProducts = await Product.countDocuments();

//         // Send response with products and pagination info
//         res.status(200).json({
//             totalProducts,
//             products
//         });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         res.status(500).json({ message: error.message });
//     }
// };


exports.getProducts = async (req, res) => {
    try {
        const start = parseInt(req.query.start) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const userId= req.userId;
        const products = await Product.find({ userId: userId }).sort({date:-1}).select('prodName images customIdentifer prodDesc countInStock prodSize prodPrice')
            .skip(start)
            .limit(limit);

        const totalProducts = await Product.countDocuments({ userId: userId });

        res.status(200).json({
            totalProducts,
            products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.getProductByCustomIdentifier = async (req, res) => {
    try {
        const { customIdentifier } = req.params;
        const product = await Product.findOne({ customIdentifer: customIdentifier }).populate('category');

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
};


// exports.updateProduct = async (req, res) => {
//     try {
//         // Get the user's ID from the token (req.user)
//         const userId = req.user.id;

//         // Extract customIdentifer from URL parameters
//         const { customIdentifer } = req.params;

//         // Extract product data from the request body
//         const { prodName, prodDesc, category, prodPrice, countInStock, prodSize } = req.body;

//         if (!customIdentifer) {
//             return res.status(400).json({ error: 'Product custom identifier is required' });
//         }

//         // Find the product by customIdentifer
//         let product = await Product.findOne({ customIdentifer });

//         if (!product) {
//             return res.status(404).json({ error: 'Product not found' });
//         }

//         // Update product details
//         let isUpdated = false;

//         if (prodName && prodName !== product.prodName) {
//             const randomComponent = Date.now().toString(); // You can replace this with your own logic
//             const newCustomIdentifer = `${slugify(prodName, { lower: true })}-${randomComponent}`;

//             product.customIdentifer = newCustomIdentifer;
//             isUpdated = true;
//         }

//         product.prodName = prodName || product.prodName;
//         product.prodDesc = prodDesc || product.prodDesc;
//         product.category = category || product.category;
//         product.prodPrice = prodPrice || product.prodPrice;
//         product.countInStock = countInStock || product.countInStock;
//         product.prodSize = prodSize || product.prodSize;

//         // Handle file uploads (if any)
//         const files = req.files;
//         const basePath = `${req.protocol}://${req.get('host')}/uploads/products`;

//         if (files && files.length > 0) {
//             // If new images are uploaded, update the images array
//             let images = files.map(file => `${basePath}/${file.filename}`);
//             product.images = images;
//             isUpdated = true;
//         }

//         // Save the updated product only if there are changes
//             const updatedProduct = await product.save();
//             res.status(200).json(updatedProduct);
        
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Server error');
//     }
// }

// exports.updateProduct = async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const { customIdentifer } = req.params;
//         const { prodName, prodDesc, prodPrice, countInStock, prodSize } = req.body;
//         const category = await Category.findById(req.body.category);
//         if(!category){
//            return res.status(400).json({error:'invalid category'})
      
//         }
//         if (!customIdentifer) {
//             return res.status(400).json({ error: 'Product custom identifier is required' });
//         }

//         let product = await Product.findOne({ customIdentifer }).populate('user');

//         if (!product) {
//             return res.status(404).json({ error: 'Product not found' });
//         }

//         let categoryId = null;
//         // if (categoryCustomIdentifer) {
//         //     const category = await Category.findOne({ customIdentifer: categoryCustomIdentifer });
//         //     if (category) {
//         //         categoryId = category._id;
//         //     } else {
//         //         return res.status(400).json({ error: 'Invalid category custom identifier' });
//         //     }
//         // }
        
//         if( product.user && product.user._id.toString() === userId.toString() ){
            

//         let isUpdated = false;
//         if (prodName && prodName !== product.prodName) {
//             const randomComponent = Date.now().toString();
//             const newCustomIdentifer = `${slugify(prodName, { lower: true })}-${randomComponent}`;

//             product.customIdentifer = newCustomIdentifer;
//             isUpdated = true;
//         }

//         product.prodName = prodName || product.prodName;
//         product.prodDesc = prodDesc || product.prodDesc;
//         product.category = category || product.category;
//         product.prodPrice = prodPrice || product.prodPrice;
//         product.countInStock = countInStock || product.countInStock;
//         product.prodSize = prodSize || product.prodSize;
//         product.user = req.userId

//         const files = req.files;
//         const basePath = `${req.protocol}://${req.get('host')}/uploads/products`;

//         if (files && files.length > 0) {
//             let images = files.map(file => `${basePath}/${file.filename}`);
//             product.images = images;
//             isUpdated = true;
//         }

//             const updatedProduct = await product.save();
//             res.status(200).json(updatedProduct);
        
        
//     } 
//     else{
//         return res.send('you are not authorised to edit this document')
//     }
// }
//     catch (error) {
//         console.error('Error updating product:', error); // Log detailed error
//         res.status(500).send('Server error');
//     }
   

// }

exports.updateProduct = async (req, res) => {
    try {
        const userId = req.userId; // Assuming req.user is populated by authentication middleware
        const { customIdentifer } = req.params;
        const { prodName, prodDesc, prodPrice, countInStock, prodSize } = req.body;

        // Validate category
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(400).json({ error: 'Invalid category' });
        }

        // Validate custom identifier
        if (!customIdentifer) {
            return res.status(400).json({ error: 'Product custom identifier is required' });
        }

        // Find product by custom identifier and populate user field
        let product = await Product.findOne({ customIdentifer }).populate('user');
        // Debugging logs
        console.log('Product:', product);
        console.log('User ID:', userId);
        console.log('Product User:', product.user);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Check if the product has an associated user
        if (product.user && product.user._id) {
            // Check if the logged-in user is the product owner
            if (product.user._id.toString() === userId.toString()) {
                let isUpdated = false;

                // Update custom identifier if prodName is changed
                if (prodName && prodName !== product.prodName) {
                    const randomComponent = Date.now().toString();
                    const newCustomIdentifer = `${slugify(prodName, { lower: true })}-${randomComponent}`;
                    product.customIdentifer = newCustomIdentifer;
                    isUpdated = true;
                }

                // Update product details
                product.prodName = prodName || product.prodName;
                product.prodDesc = prodDesc || product.prodDesc;
                product.category = category || product.category;
                product.prodPrice = prodPrice || product.prodPrice;
                product.countInStock = countInStock || product.countInStock;
                product.prodSize = prodSize || product.prodSize;

                // Handle file uploads if any
                const files = req.files;
                const basePath = `${req.protocol}://${req.get('host')}/uploads/products`;

                if (files && files.length > 0) {
                    const images = files.map(file => `${basePath}/${file.filename}`);
                    product.images = images;
                    isUpdated = true;
                }

                // Save the updated product
                const updatedProduct = await product.save();
                return res.status(200).json(updatedProduct);
            } else {
                return res.status(403).json({ error: 'You are not authorized to edit this product' });
            }
        } else {
            return res.status(400).json({ error: 'Product user information is missing' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


exports.updateAnyProduct = async (req, res) => {
    try {
        const userId = req.user.id;
        const { customIdentifer } = req.params;
        const { prodName, prodDesc, prodPrice, countInStock, prodSize } = req.body;
        const category = await Category.findById(req.body.category);
        if(!category){
           return res.status(400).json({error:'invalid category'})
      
        }
        if (!customIdentifer) {
            return res.status(400).json({ error: 'Product custom identifier is required' });
        }

        let product = await Product.findOne({ customIdentifer });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        let categoryId = null;
        // if (categoryCustomIdentifer) {
        //     const category = await Category.findOne({ customIdentifer: categoryCustomIdentifer });
        //     if (category) {
        //         categoryId = category._id;
        //     } else {
        //         return res.status(400).json({ error: 'Invalid category custom identifier' });
        //     }
        // }
        
            

        let isUpdated = false;
        if (prodName && prodName !== product.prodName) {
            const randomComponent = Date.now().toString();
            const newCustomIdentifer = `${slugify(prodName, { lower: true })}-${randomComponent}`;

            product.customIdentifer = newCustomIdentifer;
            isUpdated = true;
        }

        product.prodName = prodName || product.prodName;
        product.prodDesc = prodDesc || product.prodDesc;
        product.category = category || product.category;
        product.prodPrice = prodPrice || product.prodPrice;
        product.countInStock = countInStock || product.countInStock;
        product.prodSize = prodSize || product.prodSize;
        product.user = req.userId

        const files = req.files;
        const basePath = `${req.protocol}://${req.get('host')}/uploads/products`;

        if (files && files.length > 0) {
            let images = files.map(file => `${basePath}/${file.filename}`);
            product.images = images;
            isUpdated = true;
        }

            const updatedProduct = await product.save();
            res.status(200).json(updatedProduct);
        
        
   
}
    catch (error) {
        console.error('Error updating product:', error); // Log detailed error
        res.status(500).send('Server error');
    }
   

}