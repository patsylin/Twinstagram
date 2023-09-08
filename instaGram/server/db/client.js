// Import the Client class from the 'pg' package
const { Client } = require('pg');

// Define your database name
const dbName = "instagam"; // Replace with your actual database name

// Create a new instance of the Client with your database URL
const client = new Client(`postgres://localhost:5432/${dbName}`);

// Export the client for use in other modules
module.exports = client;
