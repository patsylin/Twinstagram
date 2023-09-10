const client = require('../client');
const { likes } = require('../seedData');


async function getAllLikes() {
  try {
    const result = await queryAsync('SELECT * FROM likes');
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function likeGetById(likeId) {
  try {
    const result = await queryAsync('SELECT * FROM likes WHERE id = $1', [likeId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}


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

  async function updateLike(likeId, fields) {
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
            WHERE "likeId"=${likeId}
            RETURNING *;
          `, Object.values(toUpdate));
            user = rows[0];
        }

        return user;
    } catch (error) {
        throw error
    }
  }

  async function deleteLike(likeId) {
    try {
        const { rows } = await client.query('DELETE FROM like WHERE "likeId"=$1 RETURNING *', [likeId]);
        return rows[0];
    } catch (err) {
        throw err
    }
  }



module.exports = {
    getAllLikes,
    likeGetById,
    createLike,
    updateLike,
    deleteLike
  };
