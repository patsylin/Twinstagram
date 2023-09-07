// Import express and create a router
const express = require('express');
const router = express.Router();

// Define routes for different sections of your app
router.get('/posts', (req, res) => {
  res.send('posts');
});

router.get('/users', (req, res) => {
  res.send('users');
});


// Export the router
module.exports = router;
