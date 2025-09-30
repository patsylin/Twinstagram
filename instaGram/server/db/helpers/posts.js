const client = require("../client");

// READ all (newest first) — includes username
async function postGetAll() {
  const { rows } = await client.query(
    `SELECT p.id, p.user_id, p.caption, p.image_url, p.created_at, u.username
     FROM posts p
     LEFT JOIN users u ON u.id = p.user_id
     ORDER BY p.created_at DESC;`
  );
  return rows;
}

// READ one — includes username
async function postGetById(postId) {
  const {
    rows: [row],
  } = await client.query(
    `SELECT p.id, p.user_id, p.caption, p.image_url, p.created_at, u.username
     FROM posts p
     LEFT JOIN users u ON u.id = p.user_id
     WHERE p.id = $1;`,
    [postId]
  );
  return row;
}

// CREATE
async function createPost({ user_id, image_url, caption }) {
  const {
    rows: [post],
  } = await client.query(
    `INSERT INTO posts (user_id, image_url, caption)
     VALUES ($1, $2, $3)
     RETURNING id, user_id, image_url, caption, created_at;`,
    [user_id, image_url, caption]
  );
  return post;
}

// UPDATE (caption or image_url)
async function updatePost(postId, fields = {}) {
  const allowed = ["caption", "image_url"];
  const keys = Object.keys(fields).filter((k) => allowed.includes(k));
  if (keys.length === 0) return postGetById(postId);

  const setSql = keys.map((k, i) => `"${k}" = $${i + 1}`).join(", ");
  const values = keys.map((k) => fields[k]);

  const {
    rows: [post],
  } = await client.query(
    `UPDATE posts
     SET ${setSql}
     WHERE id = $${keys.length + 1}
     RETURNING id, user_id, image_url, caption, created_at;`,
    [...values, postId]
  );
  return post;
}

// DELETE
async function deletePost(postId) {
  const {
    rows: [post],
  } = await client.query(
    `DELETE FROM posts
     WHERE id = $1
     RETURNING id, user_id, image_url, caption, created_at;`,
    [postId]
  );
  return post;
}

module.exports = {
  postGetAll,
  postGetById,
  createPost,
  updatePost,
  deletePost,
};
