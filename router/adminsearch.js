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

router.get('/admin/search', middleware.verifyToken, async (req, res) => {
    // try {
    //   const { query, model, start = 0, limit = 10 } = req.query; // Default limit is 10
    //   let results = [];
    //   let totalResults = 0;
  
    //   // Validate the query input
    //   if (!query) {
    //     return res.status(400).json({ message: 'Query is required.' });
    //   }
  
    //   // Prepare search options using regex
    //   const searchOptions = {
    //     $or: [
    //       { name: new RegExp(query, 'i') },
    //       { email: new RegExp(query, 'i') },
    //       { phone: new RegExp(query, 'i') },
    //       { prodName: new RegExp(query, 'i') },
    //       { description: new RegExp(query, 'i') },
    //       { status: new RegExp(query, 'i') },
    //       { reqDetails: new RegExp(query, 'i') },
    //     ],
    //   };
  
    //   // Function to fetch data based on model
    //   const fetchData = async (Model, modelName) => {
    //     const docs = await Model.find(searchOptions).lean(); // Fetch all documents matching the query
    //     return docs.map((doc) => ({ ...doc, model: modelName })); // Add model name to each document
    //   };
  
    //   // Fetch results based on model
    //   if (model) {
    //     switch (model) {
    //       case 'Product':
    //         results = await fetchData(Product, 'Product');
    //         break;
    //       case 'User':
    //         results = await fetchData(User, 'User');
    //         break;
    //       case 'Order':
    //         results = await fetchData(Order, 'Order');
    //         break;
    //       case 'Category':
    //         results = await fetchData(Category, 'Category');
    //         break;
    //       case 'ProductSubmission':
    //         results = await fetchData(ProductSubmission, 'ProductSubmission');
    //         break;
    //       case 'Requirement':
    //         results = await fetchData(Requirement, 'Requirement');
    //         break;
    //       default:
    //         return res.status(400).json({ message: 'Invalid model specified.' });
    //     }
    //   } else {
    //     // If no specific model is selected, fetch from all models
    //     const allModels = [
    //       { model: Product, name: 'Product' },
    //       { model: User, name: 'User' },
    //       { model: Order, name: 'Order' },
    //       { model: Category, name: 'Category' },
    //       { model: ProductSubmission, name: 'ProductSubmission' },
    //       { model: Requirement, name: 'Requirement' },
    //     ];
  
    //     // Fetch all results from all models
    //     const allResultsPromises = allModels.map(({ model, name }) => fetchData(model, name));
    //     const allResults = await Promise.all(allResultsPromises);
    //     results = allResults.flat(); // Flatten the results array
    //   }
  
    //   // Calculate total results
    //   totalResults = results.length;
  
    //   // Slice the results to get only the requested range
    //   const paginatedResults = results.slice(parseInt(start), parseInt(start) + parseInt(limit));
  
    //   // Send the results with total count
    //   res.status(200).json({ results: paginatedResults, totalResults });
    // } catch (error) {
    //   console.error('Error performing search:', error);
    //   res.status(500).json({ message: 'Server error' });
    // }
    try {
        const { query, model, start = 0, limit = 10 } = req.query;
        let results = [];
        let totalResults = 0;
    
        if (!query) {
          return res.status(400).json({ message: 'Query is required.' });
        }
    
        // Check if query is a valid ObjectId for ID-based search
        const isObjectId = mongoose.Types.ObjectId.isValid(query);
    
        const searchOptions = isObjectId
          ? { _id: query } // Search by _id if valid ObjectId
          : {
              $or: [
                { name: new RegExp(query, 'i') },
                { email: new RegExp(query, 'i') },
                { phone: new RegExp(query, 'i') },
                { prodName: new RegExp(query, 'i') },
                { description: new RegExp(query, 'i') },
                { status: new RegExp(query, 'i') },
                { reqDetails: new RegExp(query, 'i') },
              ],
            };
    
        const fetchData = async (Model, modelName) => {
          const docs = await Model.find(searchOptions).lean();
          return docs.map((doc) => ({ ...doc, model: modelName }));
        };
    
        if (model) {
          switch (model) {
            case 'Product':
              results = await fetchData(Product, 'Product');
              break;
            case 'User':
              results = await fetchData(User, 'User');
              break;
            case 'Order':
              results = await fetchData(Order, 'Order');
              break;
            case 'Category':
              results = await fetchData(Category, 'Category');
              break;
            case 'ProductSubmission':
              results = await fetchData(ProductSubmission, 'ProductSubmission');
              break;
            case 'Requirement':
              results = await fetchData(Requirement, 'Requirement');
              break;
            default:
              return res.status(400).json({ message: 'Invalid model specified.' });
          }
        } else {
          const allModels = [
            { model: Product, name: 'Product' },
            { model: User, name: 'User' },
            { model: Order, name: 'Order' },
            { model: Category, name: 'Category' },
            { model: ProductSubmission, name: 'ProductSubmission' },
            { model: Requirement, name: 'Requirement' },
          ];
    
          const allResultsPromises = allModels.map(({ model, name }) =>
            fetchData(model, name)
          );
          const allResults = await Promise.all(allResultsPromises);
          results = allResults.flat();
        }
    
        totalResults = results.length;
        const paginatedResults = results.slice(
          parseInt(start),
          parseInt(start) + parseInt(limit)
        );
    
        res.status(200).json({ results: paginatedResults, totalResults });
      } catch (error) {
        console.error('Error performing search:', error);
        res.status(500).json({ message: 'Server error' });
      }
    
  });
  
  
  
  
  

module.exports = router;
