const express = require('express');
const router = express.Router();
const roleMiddleware = require('../helper/roles')
const middleware = require('../helper/middleware');

const Notification = require('../database/models/notification');
router.use(middleware.verifyToken);
router.get('/notifications',async(req,res)=>{
    const notification = await Notification.find({userId:req.userId}).sort({date:-1}).populate({
        path:'userId',
        select:'name'
    })

    res.send(notification);

})

// Get unread count for the authenticated user
router.get('/count/unread-count', async (req, res) => {
    try {
        const unreadCount = await Notification.countDocuments({ userId: req.userId, isRead: false });
        res.status(200).json(unreadCount );
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch unread count' });
    }
});

// Mark all notifications as read
router.put('/mark-all-read', async (req, res) => {
    try {
        const result = await Notification.updateMany({ userId: req.userId, isRead: false }, { isRead: true });
        res.status(200).json({ message: 'All notifications marked as read', modifiedCount: result.nModified });
    } catch (error) {
        res.status(500).json({ error: 'Failed to mark notifications as read' });
    }
});
module.exports = router;