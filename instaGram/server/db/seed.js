const { Client } = require('pg');
const client = require('./db/client'); // Import the client from your client.js file in the DB folder

// Import functions and routes for populating data (placeholders)
// const { populateUsers } = require('./populators/users');
// const { populatePosts } = require('./populators/posts');

async function dropTables() {
  try {
    await client.connect();

    // Drop existing tables if they exist
    await client.query('DROP TABLE IF EXISTS posts');
    await client.query('DROP TABLE IF EXISTS users');

    console.log('Tables dropped successfully');
  } catch (error) {
    console.error('Error dropping tables:', error);
  } finally {
    await client.end();
  }
}

async function createTables() {
  try {
    await client.connect();

    // Create the tables with appropriate data types and constraints
    // Include the SQL statements for table creation here

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await client.end();
  }
}

async function populateTables() {
  try {
    await client.connect();

    // Use functions/routes to populate data (placeholders)
    // await populateUsers();
    // await populatePosts();

    console.log('Tables populated successfully');
  } catch (error) {
    console.error('Error populating tables:', error);
  } finally {
    await client.end();
  }
}

// Call the functions to drop existing tables, create new ones, and populate them
dropTables()
  .then(() => createTables())
  .then(() => populateTables())
  .catch((error) => console.error('Error seeding the database:', error));
