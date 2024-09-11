const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: String,
    isRead: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
