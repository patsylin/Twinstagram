// src/components/AllPosts.jsx
import { useEffect, useState } from "react";
import { fetchAllPosts } from "@/fetching.js";
import PostCard from "./PostCard.jsx";
import { IMAGES } from "../data/images.js";
import { CAPTION_BY_FILE } from "../data/captions.js";

// Normalize "pic1.abcd123.jpg" or "pic1-xyz987.jpg" -> "pic1.jpg"
const normalizeFilename = (name = "") => {
  const parts = name.split(".");
  if (parts.length < 2) return name;
  const ext = parts.pop(); // jpg|png|webp...
  const base = parts.join(".");
  const baseStripped = base.split("-")[0].split(".")[0];
  return `${baseStripped}.${ext}`;
};

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchAllPosts();
        if (Array.isArray(res) && res.length > 0) {
          setPosts(res);
        } else {
          throw new Error("Empty/invalid API result");
        }
      } catch {
        // Fallback: build posts from local images with caption map
        const demo = IMAGES.map(({ filename, url }, i) => {
          const clean = normalizeFilename(filename);
          return {
            id: i + 1,
            username: `user_${(i % 5) + 1}`,
            imageUrl: url,
            caption: CAPTION_BY_FILE[clean] || "",
            filename: clean, // keep for debugging
          };
        });

        setPosts(demo);

        // ✅ log filenames, urls, and captions
        console.table(
          demo.map((d) => ({
            file: d.filename,
            url: d.imageUrl,
            caption: d.caption,
          }))
        );
      }
    })();
  }, []);

  return (
    <div className="ig-feed-inner">
      {posts.map((p) => (
        <PostCard
          key={p.id}
          username={p.username}
          imageUrl={p.imageUrl}
          caption={p.caption}
        />
      ))}
    </div>
  );
}
