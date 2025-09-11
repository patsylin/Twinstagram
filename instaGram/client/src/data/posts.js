// src/data/posts.js
import { CAPTION_BY_FILE } from "./captions";

// Vite will turn matches into { "path/filename.ext": "url", ... }
const files = import.meta.glob("../assets/images/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
  as: "url",
});

// Sort by path so order is consistent (nice for dev)
const entries = Object.entries(files).sort(([a], [b]) => a.localeCompare(b));

export const POSTS = entries.map(([path, url], i) => {
  const filename = path.split("/").pop(); // "pic1.jpg"
  return {
    id: i + 1,
    username: `user_${(i % 5) + 1}`,
    imageUrl: url,
    caption: CAPTION_BY_FILE[filename] || "", // empty if not provided
    createdAt: new Date().toISOString(),
  };
});
