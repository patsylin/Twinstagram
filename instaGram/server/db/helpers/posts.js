
const client = require('../client');


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

async function updatePost(postId, fields) {
  try {
      const toUpdate = {}
      for (let column in fields) {
          if (fields[column] !== undefined) toUpdate[column] = fields[column];
      }
      let user;

      if (util.dbFields(toUpdate).insert.length > 0) {
          const { rows } = await client.query(`
          UPDATE user
          SET ${util.dbFields(toUpdate).insert}
          WHERE "userId"=${userId}
          RETURNING *;
        `, Object.values(toUpdate));
          user = rows[0];
      }

      return user;
  } catch (error) {
      throw error
  }
}

async function deletePost(postId) {
  try {
      const { rows } = await client.query('DELETE FROM post WHERE "postId"=$1 RETURNING *', [postId]);
      return rows[0];
  } catch (err) {
      throw err
  }
}



module.exports = {
  postGetAll,
  postGetById,
  createPost,
  updatePost,
  deletePost
};
