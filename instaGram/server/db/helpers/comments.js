
const client = require('../client');
const { comments } = require('../seedData');


async function getAllComments() {
  try {
    const result = await client.query('SELECT * FROM comments');
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function commentGetById(commentId) {
  try {
    const result = await client.query('SELECT * FROM comments WHERE id = $1', [commentId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

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

async function updateComment (commentId, fields) {
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
          WHERE "commentId"=${commentId}
          RETURNING *;
        `, Object.values(toUpdate));
          user = rows[0];
      }

      return user;
  } catch (error) {
      throw error
  }
}

async function deleteComment(commentId) {
  try {
      const { rows } = await client.query('DELETE FROM comment WHERE "commentId"=$1 RETURNING *', [commentId]);
      return rows[0];
  } catch (err) {
      throw err
  }
}



module.exports = {
  getAllComments,
  commentGetById,
  createComment,
  updateComment,
  deleteComment
};
