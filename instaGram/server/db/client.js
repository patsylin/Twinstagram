//this actual connection to the db itself

// Import the Client class from the 'pg' package
const { Client } = require('pg');

// Define your database name
const dbName = "instagram";

// Create a new instance of the Client with your database URL
//(a tunnel from server to database)
const client = new Client(`postgres://localhost:5432/${dbName}`);

// Export the client for use in other modules
module.exports = client;
