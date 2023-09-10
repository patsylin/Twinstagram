
const client = require('../client');


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

const createPost = async ({user_id, caption, imageUrl}) => {
  try {
    const {
      rows: [post],
    } = await client.query(
      `INSERT INTO posts(user_id, caption, image_url)
      VALUES($1, $2, $3)
      RETURNING *;
      `,
      [user_id, imageUrl, caption]
    )
    return post
  } catch (error) {
    throw error
  }
}

module.exports = {
  // postGetAll,
  // postGetById,
  createPost
};
