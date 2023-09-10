// Import express and create a router
const express = require('express');
const router = express.Router();


router.use('/users',  require('./users'));

// Export the router
module.exports = router;
