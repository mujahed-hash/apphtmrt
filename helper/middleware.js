const jwt2 = require('jsonwebtoken');
// const authorize = jwt({
//     secret: process.env.secret,
//     userProperty: 'payload',
//     algorithms: ["HS256"],
// });

// module.exports = {
//     authorize
// }


module.exports.verifyToken =  (req, res, next) => {
  
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt2.verify(token, process.env.SECRET);
        req.user = decoded; // Attach the decoded token information to req.user
        req.userId = decoded.userId
        // req.user = await User.findById(decoded._id).select('-password');
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }

};