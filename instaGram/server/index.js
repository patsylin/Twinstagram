// server/index.js
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const client = require('./db/client');

app.use(cors()); // Enable CORS for all routes


// Base route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// API router with /api prefix
const apiRouter = express.Router();

apiRouter.get('/greet', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
    // Start the server once the database is connected
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });
