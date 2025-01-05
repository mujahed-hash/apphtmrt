const asyncHandler = require('express-async-handler');
const Cart = require('../database/models/cart');
const Order = require('../database/models/order');
const Product = require('../database/models/product');
const User = require('../database/models/user');
const slugify = require('slugify');
const Notification = require('../database/models/notification');

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ user: req.userId }).sort({date:-1}).populate('items.product', 'prodName prodPrice prodSize countInStock images');

    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    res.json(cart);
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
// const addItemToCart = asyncHandler(async (req, res) => {
//     const { productId, quantity } = req.body;

//     const cart = await Cart.findOne({ user: req.userId });

//     if (cart) {
//         const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

//         if (itemIndex > -1) {
//             // Update quantity if item already exists in cart
//             cart.items[itemIndex].quantity += quantity;
//         } else {
//             // Add new item to cart
//             cart.items.push({ product: productId, quantity });
//         }

//         await cart.save();
//         res.json(cart);
//     } else {
//         const newCart = new Cart({
//             user: req.user._id,
//             items: [{ product: productId, quantity }]
//         });

//         const createdCart = await newCart.save();
//         res.status(201).json(createdCart);
//     }
// });
// const addItemToCart = asyncHandler(async (req, res) => {
//     const { productId, quantity } = req.body;

//     const userId = req.userId || req.user || req.user._id;

//     const cart = await Cart.findOne({ user: userId });

//     if (cart) {
//         const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

//         if (itemIndex > -1) {
//             // Update quantity if item already exists in cart
//             cart.items[itemIndex].quantity += quantity;
//         } else {
//             // Add new item to cart
//             cart.items.push({ product: productId, quantity });
//         }

//         await cart.save();
//         res.json(cart);
//     } else {
//         const newCart = new Cart({
//             user: userId,
//             items: [{ product: productId, quantity }]
//         });

//         const createdCart = await newCart.save();
//         res.status(201).json(createdCart);
//     }
// });

const addItemToCart = asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body; // Ensure these are being passed correctly
  
    const userId = req.userId || req.user._id;
  
    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId });
  
    if (cart) {
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
  
      if (itemIndex > -1) {
        // If the item exists, update the quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // If the item does not exist, add a new one
        cart.items.push({ product: productId, quantity });
      }
  
      await cart.save();
      res.json(cart);
    } else {
      // If no cart exists, create a new one
      const newCart = new Cart({
        user: userId,
        items: [{ product: productId, quantity }]
      });
  
      const createdCart = await newCart.save();
      res.status(201).json(createdCart);
    }
  });
  
// @desc    Create order from cart
// @route   POST /api/cart/checkout
// @access  Private
// const checkout = asyncHandler(async (req, res) => {
//     const cart = await Cart.findOne({ user: req.userId }).populate('items.product', 'prodName prodPrice countInStock');

//     if (!cart) {
//         res.status(404);
//         throw new Error('Cart not found');
//     }

//     const user = await User.findById(req.userId);

//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     const shippingAddress = {
//         street: user.street,
//         city: user.city,
//         postalCode: user.zip,
//         country: user.country
//     };

//     const orderItems = cart.items.map(item => ({
//         product: item.product._id,
//         quantity: item.quantity
//     }));

//     const totalPrice = cart.items.reduce((total, item) => total + item.product.prodPrice * item.quantity, 0);

//     const order = new Order({
//         user: req.user._id,
//         orderItems,
//         shippingAddress,
//         totalPrice,
//         status: 'Pending'
//     });

//     const createdOrder = await order.save();

//     // Update the stock count for each product
//     for (const item of cart.items) {
//         const product = await Product.findById(item.product._id);
//         if (product) {
//             product.countInStock -= item.quantity;
//             await product.save();
//         }
//     }

//     // Clear the cart
//     await cart.remove();

//     res.status(201).json(createdOrder);
// });

// const checkoutAll = asyncHandler(async (req, res) => {
//     const cart = await Cart.findOne({ user: req.userId }).populate('items.product', 'prodName prodPrice countInStock');

//     if (!cart) {
//         res.status(404);
//         throw new Error('Cart not found');
//     }

//     const user = await User.findById(req.userId);

//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     const shippingAddress = {
//         street: user.street,
//         city: user.city,
//         postalCode: user.zip,
//         country: user.country
//     };

//     const orderItems = cart.items.map(item => ({
//         product: item.product._id,
//         quantity: item.quantity
//     }));

//     const totalPrice = cart.items.reduce((total, item) => total + item.product.prodPrice * item.quantity, 0);

//     const order = new Order({
//         user: req.user._id,
//         orderItems,
//         shippingAddress,
//         totalPrice,
//         notes:req.body.notes,
//         status: 'Pending'
//     });

//     const createdOrder = await order.save();

//     // Update the stock count for each product
//     for (const item of cart.items) {
//         const product = await Product.findById(item.product._id);
//         if (product) {
//             product.countInStock -= item.quantity;
//             await product.save();
//         }
//     }

//     // Clear the cart
//     await cart.remove();

//     res.status(201).json(createdOrder);
// });

// const checkoutSingle = asyncHandler(async (req, res) => {
//     const userId = req.userId;
//     const user = await User.findById(userId).populate('posts');
//     const { productId } = req.body;
//     const cart = await Cart.findOne({ user: req.userId }).populate('items.product', 'prodName prodPrice countInStock');
  
//     if (!cart) {
//       res.status(404);
//       throw new Error('Cart not found');
//     }
  
  
//     if (!user) {
//       res.status(404);
//       throw new Error('User not found');
//     }
  
//     const cartItem = cart.items.find(item => item.product._id.toString() === productId);
  
//     if (!cartItem) {
//       res.status(404);
//       throw new Error('Product not found in cart');
//     }
  
//     const shippingAddress = {
//       street: user.street,
//       city: user.city,
//       postalCode: user.zip,
//       country: user.country
//     };
  
//     const orderItems = [{
//       product: cartItem.product._id,
//       quantity: cartItem.quantity
//     }];
  
//     const totalPrice = cartItem.product.prodPrice * cartItem.quantity;
  
//     const order = new Order({
//       user: user._id,
//       orderItems,
//       shippingAddress,
//       totalPrice,
//       notes:req.body.notes,
//       status: 'Pending'
//     });
  
//     const createdOrder = await order.save();
  
//     // Update the stock count for the product
//     const product = await Product.findById(cartItem.product._id);
//     if (product) {
//       product.countInStock -= cartItem.quantity;
//       await product.save();
//     }
  
//     // Remove the item from the cart
//     cart.items = cart.items.filter(item => item.product._id.toString() !== productId);
//     await cart.save();
  
//     res.status(201).json(createdOrder);
//   });

//   const checkoutSingle = asyncHandler(async (req, res) => {
//     const { productId } = req.body;
//     const userId = req.userId || req.user || req.user._id
//     const cart = await Cart.findOne({ user: userId }).populate('items.product', 'prodName prodPrice countInStock prodSize');

//     if (!cart) {
//       res.status(404);
//       throw new Error('Cart not found');
//     }
  
//     const user = await User.findById(req.userId);
  
//     if (!user) {
//       res.status(404);
//       throw new Error('User not found');
//     }
  
//     const cartItem = cart.items.find(item => item.product._id.toString() === productId);
  
//     if (!cartItem) {
//       res.status(404);
//       throw new Error('Product not found in cart');
//     }
  
//     const shippingAddress = {
//       street: user.street,
//       city: user.city,
//       postalCode: user.zip,
//       country: user.country
//     };
  
//     const orderItems = [{
//       product: cartItem.product._id,
//       quantity: cartItem.quantity,
//       prodSize: cartItem.product.prodSize
//     }];
  
//     const totalPrice = cartItem.product.prodPrice * cartItem.quantity;
  
//     const order = new Order({
//       user: userId,
//       orderItems,
//       shippingAddress,
//       totalPrice,
//       notes: req.body.notes,
//       status: 'Pending'
//     });
  
//     const createdOrder = await order.save();
  
//     const product = await Product.findById(cartItem.product._id);
//     if (product) {
//       product.countInStock -= cartItem.quantity;
//       await product.save();
//     }
  
//     cart.items = cart.items.filter(item => item.product._id.toString() !== productId);
//     await cart.save();
  
//     res.status(201).json(createdOrder);
//   });

// const checkoutAll = asyncHandler(async (req, res) => {
//     const userId = req.userId;
//     const user = await User.findById(userId).populate('posts');
//     const cart = await Cart.findOne({user: userId}).populate('items.product', 'prodName prodPrice countInStock prodSize');

//     if (!cart) {
//         res.status(404);
//         throw new Error('Cart not found');
//     }

//     // const user = await User.findById(req.userId);

//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     const shippingAddress = {
//         street: user.street,
//         city: user.city,
//         postalCode: user.zip,
//         country: user.country
//     };

//     const orderItems = await cart.items.map(item => ({
//         product: item.product._id,
//         quantity: item.quantity,
//         prodSize: item.product.prodSize // Ensure prodSize is included
//     }));

//     const totalPrice = await cart.items.reduce((total, item) => total + item.product.prodPrice * item.quantity, 0);

//     const randomComponent = Date.now().toString(); // You can replace this with your own logic
//         const customIdentifer = `${slugify(`order-${user.name}`, { lower: true })}-${randomComponent}`;
//     const {notes} = req.body
//     const order = new Order({
//         user: user._id,
//         orderItems,
//         customIdentifer: customIdentifer,
//         shippingAddress,
//         totalPrice,
//         notes: req.body.notes,
//         status: 'Pending'
//     });

//     const createdOrder = await order.save();

//     // Update the stock count for each product
//     for (const item of cart.items) {
//         const product = await Product.findById(item.product._id);
//         if (product) {
//             product.countInStock -= item.quantity;
//             await product.save();

//         }
//     }

//     // Clear the cart by setting items to an empty array and saving the cart

//     cart.items = [];
//     await cart.save();
//     // await Cart.findByIdAndDelete(cart._id);

//     res.status(201).json(createdOrder);
// });

// const checkoutAll = asyncHandler(async (req, res) => {
//     const userId = req.userId;
//     const user = await User.findById(userId).populate('posts');

//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     const cart = await Cart.findOne({ user: userId }).populate('items.product', 'prodName prodPrice countInStock prodSize user');

//     if (!cart || cart.items.length === 0) {
//         res.status(404);
//         throw new Error('Cart is empty or not found');
//     }

//     const shippingAddress = {
//         street: user.street,
//         city: user.city,
//         postalCode: user.zip,
//         country: user.country
//     };

//     const orderItems = cart.items.map(item => ({
//         product: item.product._id,
//         quantity: item.quantity,
//         prodSize: item.product.prodSize // Ensure prodSize is included
//     }));

//     const totalPrice = cart.items.reduce((total, item) => total + item.product.prodPrice * item.quantity, 0);

//     const randomComponent = Date.now().toString(); // You can replace this with your own logic
//     const customIdentifer = `${slugify(`order-${user.name}`, { lower: true })}-${randomComponent}`;

//     const { notes } = req.body;

//     const order = new Order({
//         user: user._id,
//         orderItems,
//         customIdentifer,
//         shippingAddress,
//         totalPrice,
//         notes,
//         status: 'Pending'
//     });

//     const createdOrder = await order.save();

//     // Update stock count for each product and prepare notifications
//     const notifications = [];
//     for (const item of cart.items) {
//         const product = await Product.findById(item.product._id).populate('user', 'name');
//         if (product) {
//             product.countInStock -= item.quantity;
       
//             // Add supplier notification
//             notifications.push({
//                 userId: product?.user?._id,
//                 message: `You have received a new order for your product: ${product.prodName}.`,
//                 referenceId: createdOrder._id
//             });
//             await product.save();
//             console.log( product?.user?._id)
//         }
//     }

//     // Add buyer notification
//     notifications.push({
//         userId: userId,
//         message: `Your order with identifier ${customIdentifer} has been placed successfully.`,
//         referenceId: createdOrder._id
//     });

//     // Save all notifications
//     await Notification.insertMany(notifications);

//     // Clear the cart by setting items to an empty array and saving the cart
//     cart.items = [];
//     await cart.save();

//     res.status(201).json({ message: 'Order placed successfully', order: createdOrder });
// });
// const checkoutAll = asyncHandler(async (req, res) => {
//     const userId = req.userId;
//     const user = await User.findById(userId).populate('posts');
//     const cart = await Cart.findOne({ user: userId }).populate('items.product', 'prodName prodPrice countInStock prodSize user');

//     if (!cart) {
//         res.status(404);
//         throw new Error('Cart not found');
//     }

//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     const shippingAddress = {
//         street: user.street,
//         city: user.city,
//         postalCode: user.zip,
//         country: user.country
//     };

//     const orderItems = await cart.items.map(item => ({
//         product: item.product._id,
//         quantity: item.quantity,
//         prodSize: item.product.prodSize // Ensure prodSize is included
//     }));

//     const totalPrice = cart.items.reduce((total, item) => total + item.product.prodPrice * item.quantity, 0);

//     const randomComponent = Date.now().toString(); // You can replace this with your own logic
//     const customIdentifier = `${slugify(`order-${user.name}`, { lower: true })}-${randomComponent}`;
//     const { notes } = req.body;

//     const order = new Order({
//         user: user._id,
//         orderItems,
//         customIdentifer: customIdentifier,
//         shippingAddress,
//         totalPrice,
//         notes,
//         status: 'Pending'
//     });

//     const createdOrder = await order.save();

//     // Notify Buyer about the order
//     await Notification.create({
//         userId: userId,
//         message: `Your order with identifier ${customIdentifier} has been placed successfully.`,
//         isRead: false
//     });

//     // Notify Suppliers for each product
//     for (const item of cart.items) {
//         const product = await Product.findById(item.product._id).populate('user'); // Ensure product includes supplier info

//         if (product) {
//             // Update stock count
//             product.countInStock -= item.quantity;
//             await product.save();

//             // Send notification to supplier
//             await Notification.create({
//                 userId: product?.user?._id, // Supplier's user ID
//                 message: `You have received a new order for your product: ${product.prodName}.`,
//                 isRead: false
//             });
//         }
//     }

//     // Clear the cart
//     cart.items = [];
//     await cart.save();

//     res.status(201).json(createdOrder);
// });

const checkoutAll = asyncHandler(async (req, res) => {
    const userId = req.userId;
    const user = await User.findById(userId).populate('posts');
    const cart = await Cart.findOne({ user: userId }).populate('items.product', 'prodName prodPrice countInStock prodSize user');

    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const shippingAddress = {
        street: user.street,
        city: user.city,
        postalCode: user.zip,
        country: user.country
    };

    const orderItems = await cart.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        prodSize: item.product.prodSize // Ensure prodSize is included
    }));

    const totalPrice = await cart.items.reduce((total, item) => total + item.product.prodPrice * item.quantity, 0);

    const randomComponent = Date.now().toString(); // You can replace this with your own logic
    const customIdentifer = `${slugify(`order-${user.name}`, { lower: true })}-${randomComponent}`;
    const { notes } = req.body;

    const order = await new Order({
        user: user._id,
        orderItems,
        customIdentifer,
        shippingAddress,
        totalPrice,
        notes,
        status: 'Pending'
    });

    const createdOrder = await order.save();
    await Notification.create({
        userId: userId, // Buyer ID
        message: `Your order with identifier ${customIdentifer} has been placed successfully.`,
        orderIdentifier:customIdentifer,
        isRead: false
    });
    // Process each product in the cart
    const productPromises = cart.items.map(async (item) => {
        try {
            const product = await Product.findById(item.product._id).populate('user'); // Ensure product includes supplier info
            if (!product) {
                console.error(`Product with ID ${item.product._id} not found.`);
                return;
            }

            // Update product stock
            product.countInStock -= item.quantity;
            await product.save();

            // Send notification to supplier
            if (product.user && product.user._id) {
                await Notification.create({
                    userId: product.user._id, // Send the notification to the supplier
                    message: `You have received a new order for your product: ${product.prodName}.`,
                    productIdentifier:product.customIdentifer,
                    orderIdentifier:customIdentifer,

                    isRead: false
                });
            } else {
                console.error(`Supplier not found for product ID ${item.product._id}`);
            }
        } catch (error) {
            console.error(`Error processing product ID ${item.product._id}:`, error.message);
        }
    });

    // Wait for all product processing to complete
    await Promise.all(productPromises);

    // Clear the cart
    cart.items = [];
    await cart.save();

    res.status(201).json(createdOrder);
});
// const checkoutSingle = asyncHandler(async (req, res) => {
//     const userId = req.userId;
//     const user = await User.findById(userId).populate('posts');
//     const { productId } = req.body;
//     const cart = await Cart.findOne({ user: req.userId }).populate('items.product', 'prodName prodPrice countInStock prodSize');
//     const randomComponent = Date.now().toString(); // You can replace this with your own logic
//     const customIdentifer = `${slugify(`order-${user.name}`, { lower: true })}-${randomComponent}`;
//     if (!cart) {
//         res.status(404);
//         throw new Error('Cart not found');
//     }

//     if (!user) {
//         res.status(404);
//         throw new Error('User not found');
//     }

//     const cartItem = cart.items.find(item => item.product._id.toString() === productId);

//     if (!cartItem) {
//         res.status(404);
//         throw new Error('Product not found in cart');
//     }

//     const shippingAddress = {
//         street: user.street,
//         city: user.city,
//         postalCode: user.zip,
//         country: user.country
//     };

//     const orderItems = [{
//         product: cartItem.product._id,
//         quantity: cartItem.quantity,
//         prodSize: cartItem.product.prodSize,  // Ensure prodSize is included
//     }];

//     const totalPrice = cartItem.product.prodPrice * cartItem.quantity;

//     const order = new Order({
//         user: user._id,
//         orderItems,
//         customIdentifer: customIdentifer,
//         shippingAddress,
//         totalPrice,
//         notes: req.body.notes,
//         status: 'Pending'
//     });

//     const createdOrder = await order.save();

//     // Update the stock count for the product
//     const product = await Product.findById(cartItem.product._id);
//     if (product) {
//         product.countInStock -= cartItem.quantity;
//         await product.save();
//     }

//     // Remove the item from the cart
//     cart.items = cart.items.filter(item => item.product._id.toString() !== productId);
//     await cart.save();
   
//     res.status(201).json(createdOrder);
// });

const checkoutSingle = asyncHandler(async (req, res) => {
    const userId = req.userId; // Buyer ID
    const user = await User.findById(userId).populate('posts');
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: req.userId }).populate('items.product', 'prodName prodPrice countInStock prodSize');
    const randomComponent = Date.now().toString();
    const customIdentifer = `${slugify(`order-${user.name}`, { lower: true })}-${randomComponent}`;
    
    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const cartItem = await cart.items.find(item => item.product._id.toString() === productId);

    if (!cartItem) {
        res.status(404);
        throw new Error('Product not found in cart');
    }

    const shippingAddress = {
        street: user.street,
        city: user.city,
        postalCode: user.zip,
        country: user.country
    };

    const orderItems = [{
        product: cartItem.product._id,
        quantity: cartItem.quantity,
        prodSize: cartItem.product.prodSize,
    }];

    const totalPrice = cartItem.product.prodPrice * cartItem.quantity;

    const order = new Order({
        user: user._id,
        orderItems,
        customIdentifer,
        shippingAddress,
        totalPrice,
        notes: req.body.notes,
        status: 'Pending'
    });

    const createdOrder = await order.save();

    // Update the stock count for the product
    const product = await Product.findById(cartItem.product._id).populate('user', 'name'); // Populate supplier
    if (product) {
        product.countInStock -= cartItem.quantity;
        await product.save();
    }

    // Remove the item from the cart
    cart.items = cart.items.filter(item => item.product._id.toString() !== productId);
    await cart.save();

    // Send notifications
    const supplier = product.user; // Supplier of the product
    const buyerMessage = `Your order for ${cartItem.product.prodName} has been placed successfully.`;
    const supplierMessage = `You have received a new order for your product: ${cartItem.product.prodName}.`;

    await Notification.create([
        {
            userId: userId,
            message: buyerMessage,
            referenceId: createdOrder._id
        },
        {
            userId: supplier._id,
            message: supplierMessage,
            referenceId: createdOrder._id
        }
    ]);

    res.status(201).json(createdOrder);
});

const removeCartItem = asyncHandler(async (req, res) => {
    const { cartItemId } = req.body;

    const cart = await Cart.findOne({ user: req.userId });
    if (!cart) {
        res.status(404);
        throw new Error('Cart not found');
    }

    const itemIndex = cart.items.findIndex(item => item._id.toString() === cartItemId);
    if (itemIndex === -1) {
        res.status(404);
        throw new Error('Cart item not found');
    }

    cart.items.splice(itemIndex, 1);
    await cart.save();

    res.status(200).json({ message: 'Cart item removed successfully' });
});
module.exports = {
    getCart,
    addItemToCart,
    checkoutSingle,
    checkoutAll,
    removeCartItem
};
