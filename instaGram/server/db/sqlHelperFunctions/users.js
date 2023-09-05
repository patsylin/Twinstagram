// In users.js
const { Client } = require('pg');
const client = require('../../db/client');
const { promisify } = require('util');
const queryAsync = promisify(client.query).bind(client);

async function userGetAll() {
  try {
    const result = await queryAsync('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function userGetById(userId) {
  try {
    const result = await queryAsync('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  userGetAll,
  userGetById,
};
