const client = require('../client');

const createLike = async ({user_id, post_id, timestamp}) => {
    try {
      const {
        rows: [like],
      } = await client.query(
        `INSERT INTO likes(user_id, post_id, time_stamp)
        VALUES($1, $2, $3)
        RETURNING *;
        `,
        [user_id, post_id, timestamp]
      )
      return like
    } catch (error) {
      throw error
    }
  }




module.exports = {
    // postGetAll,
    // postGetById,
    createLike
  };
