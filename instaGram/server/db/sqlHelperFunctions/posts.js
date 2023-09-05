// In posts.js
const { Client } = require('pg');
const client = require('../../db/client');
const { promisify } = require('util');
const queryAsync = promisify(client.query).bind(client);

async function postGetAll() {
  try {
    const result = await queryAsync('SELECT * FROM posts');
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function postGetById(postId) {
  try {
    const result = await queryAsync('SELECT * FROM posts WHERE id = $1', [postId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = {
  postGetAll,
  postGetById,
};
