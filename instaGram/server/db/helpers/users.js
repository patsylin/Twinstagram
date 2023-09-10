// In users.js
const client = require('../client');


async function userGetAll() {
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function userGetById(userId) {
  try {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

const createUser = async ({username, email, password, profileImage, fullName, bio}) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `INSERT INTO users(username, email, password, profile_pic_url, full_name, bio)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      [username, email, password, profileImage, fullName, bio]
    )
    return user
  } catch (error) {
    throw error
  }
}


async function updateUser(userId, fields) {
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

async function deleteUser(userId) {
  try {
      const { rows } = await client.query('DELETE FROM user WHERE "userId"=$1 RETURNING *', [userId]);
      return rows[0];
  } catch (err) {
      throw err
  }
}



module.exports = {
  userGetAll,
  userGetById,
  createUser,
  updateUser,
  deleteUser
};
