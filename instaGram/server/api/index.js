// Import express and create a router
const express = require('express');
const router = express.Router();



router.use('/users',  require('./users'));
router.use('/posts',  require('./posts'));
router.use('/comments',  require('./comments'));
router.use('/likes',  require('./likes'));

// Export the router
module.exports = router;
