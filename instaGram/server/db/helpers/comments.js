
const client = require('../client');
const { comments } = require('../seedData');


// async function postGetAll() {
//   try {
//     const result = await queryAsync('SELECT * FROM posts');
//     return result.rows;
//   } catch (error) {
//     throw error;
//   }
// }

// async function postGetById(postId) {
//   try {
//     const result = await queryAsync('SELECT * FROM posts WHERE id = $1', [postId]);
//     return result.rows[0];
//   } catch (error) {
//     throw error;
//   }
// }

const createComment = async ({user_id, post_id, text, timestamp}) => {
  try {
    const {
      rows: [comments],
    } = await client.query(
      `INSERT INTO comments(user_id, post_id, text, time_stamp)
      VALUES($1, $2, $3, $4)
      RETURNING *;
      `,
      [user_id, post_id, text, timestamp]
    )
    return comments
  } catch (error) {
    throw error
  }
}

module.exports = {
  // postGetAll,
  // postGetById,
  createComment
};
