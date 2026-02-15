const express = require('express');
const router = express.Router();
const monitoringController = require('../controllers/monitoring');
const middleware = require('../helper/middleware');
const roleMiddleware = require('../helper/roles');

// Protected routes: Only Admin can access monitoring
router.get('/monitoring/stats', middleware.verifyToken, roleMiddleware('isAdmin'), monitoringController.getSystemStats);
router.post('/monitoring/clear-cache', middleware.verifyToken, roleMiddleware('isAdmin'), monitoringController.clearCache);

module.exports = router;
