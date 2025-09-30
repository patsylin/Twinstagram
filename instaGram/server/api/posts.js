const path = require("path");
const express = require("express");
const multer = require("multer");

const {
  postGetAll,
  postGetById,
  createPost,
  updatePost,
  deletePost,
} = require("../db/helpers/posts");

const router = express.Router();

// Multer storage: server/uploads/<unique>.ext
const storage = multer.diskStorage({
  destination: (_req, _file, cb) =>
    cb(null, path.join(__dirname, "..", "uploads")),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname || "");
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_req, file, cb) => {
    if (/^image\/(png|jpeg|jpg|gif|webp)$/.test(file.mimetype))
      return cb(null, true);
    cb(new Error("Only image files are allowed."));
  },
});

// GET all
router.get("/", async (_req, res, next) => {
  try {
    const posts = await postGetAll();
    res.send(posts);
  } catch (error) {
    next(error);
  }
});

// GET by id
router.get("/:id", async (req, res, next) => {
  try {
    const post = await postGetById(req.params.id);
    res.send(post);
  } catch (error) {
    next(error);
  }
});

// CREATE with image upload + caption
// Expect multipart/form-data with fields:
//   image: File
//   caption: string
//   user_id: number (until you wire auth)
router.post("/", upload.single("image"), async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: "Image is required" });

    const { caption = "", user_id } = req.body;
    const uid = parseInt(user_id, 10);
    if (Number.isNaN(uid)) {
      return res
        .status(400)
        .json({ error: "user_id is required and must be a number" });
    }

    const image_url = `/uploads/${req.file.filename}`;
    const post = await createPost({ user_id: uid, image_url, caption });

    res.status(201).send(post);
  } catch (err) {
    next(err);
  }
});

// UPDATE (e.g., { caption: "new" })
router.put("/:id", async (req, res, next) => {
  try {
    const post = await updatePost(req.params.id, req.body);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const post = await deletePost(req.params.id);
    res.send(post);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
