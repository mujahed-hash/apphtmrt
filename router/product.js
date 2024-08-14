const express = require('express');
const router = express.Router();
const upload = require('../multer/multer');
const productController = require('../controllers/product');
const middleware = require('../helper/middleware');
const roleMiddleware = require('../helper/roles')

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
module.exports = router;