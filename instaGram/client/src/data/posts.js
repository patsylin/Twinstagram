// src/data/posts.js
import { CAPTION_BY_FILE } from "./captions";
import { USERS } from "./users";

const files = import.meta.glob("../assets/images/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
  as: "url",
});

const entries = Object.entries(files).sort(([a], [b]) => a.localeCompare(b));

export const POSTS = entries.map(([path, url], i) => {
  const filename = path.split("/").pop();
  const user = USERS[i % USERS.length]; // rotate through your handles

  return {
    id: i + 1,
    username: user.handle, // 👈 now a real IG-style handle
    name: user.name, // optional display name
    imageUrl: url,
    caption: CAPTION_BY_FILE[filename] || "",
    createdAt: new Date().toISOString(),
  };
});

console.log(
  "[posts] first 3 usernames:",
  entries.slice(0, 3).map((_, i) => USERS[i % USERS.length].handle)
);
