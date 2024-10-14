const express = require('express');
const router = express.Router();
const upload = require('../multer/multer');
const productController = require('../controllers/product');
const middleware = require('../helper/middleware');
const roleMiddleware = require('../helper/roles')
const Category = require('../database/models/category');
const Product = require('../database/models/product');
const Cart = require('../database/models/cart');

// Create a new post
router.post('/product', middleware.verifyToken, roleMiddleware('isSupplier'), upload.array('images'), productController.productPost);
// by user
router.delete('/product/delete', middleware.verifyToken, productController.deletProduct);
router.get('/products',middleware.verifyToken,productController.getProducts );
router.get('/supplier/items', middleware.verifyToken, roleMiddleware('isSupplier'), productController.getProductsByUser);
router.get('/supplier/productscount',middleware.verifyToken, roleMiddleware('isSupplier'), productController.getProductsCountforSupplier );
router.get('/admin/productscount',middleware.verifyToken, roleMiddleware('isAdmin'), productController.getProductsCountforAmin );

router.get('/product/:customIdentifier', productController.getProductByCustomIdentifier);
router.put('/product/:customIdentifer', middleware.verifyToken, roleMiddleware('isSupplier'), upload.array('images'), productController.updateProduct);

router.get('/admin/allitems', middleware.verifyToken, roleMiddleware('isAdmin'), productController.getAllProducts);

router.put('/admin/updatepost/:customIdentifer', middleware.verifyToken, roleMiddleware('isAdmin'), productController.updateAnyProduct)

router.get('/products/by-category/:customIdentifier',middleware.verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const { customIdentifier } = req.params;
        const category = await Category.findOne({ customIdentifer: customIdentifier }).exec();
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const start = parseInt(req.query.start) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const products = await Product.find({ category: category._id })  .sort({ date: -1 })
        .select('prodName images customIdentifer prodDesc countInStock prodSize prodPrice')
        .skip(start)
        .limit(limit).exec();
  // Fetch the user's cart
  const cart = await Cart.findOne({ user: userId });
  // Check if each product is in the user's cart using findIndex
  const productsWithCartStatus = products.map(product => {
      const productId = product._id.toString();
      const itemIndex = cart ? cart.items.findIndex(item => {
          console.log("Comparing cart item ID:", item.product.toString(), "with product ID:", product._id.toString());
          return item.product.toString() === product._id.toString();
      }) : -1;
                  const isInCart = itemIndex !== -1;  // If itemIndex is not -1, product is in the cart

      return {
          ...product._doc,  // Spread the product document
          inCart: isInCart  // Add the 'inCart' status
      };
  });

  // Total number of products in the database
  const totalProducts = await Product.countDocuments({ countInStock: { $gt: 0 } });

  // Send the response with total products and the modified products array
  res.status(200).json({
      totalProducts,
      products: productsWithCartStatus
  });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports = router;