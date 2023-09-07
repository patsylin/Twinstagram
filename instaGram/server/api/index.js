// Import express and create a router
const express = require('express');
const router = express.Router();

// Define routes for different sections of your app
router.get('/cats', (req, res) => {
  res.send('List of Cats');
});

router.get('/dogs', (req, res) => {
  res.send('List of Dogs');
});

router.get('/other', (req, res) => {
  res.send('List of Other Pets');
});

// Export the router
module.exports = router;
