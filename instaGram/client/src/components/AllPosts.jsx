import { useEffect, useState } from "react";
import { fetchAllPosts } from "@/fetching.js";
import PostCard from "./PostCard.jsx";
import { IMAGE_POOL } from "../data/images.js";

console.log("IMAGE_POOL:", IMAGE_POOL);

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchAllPosts();
        // expected shape: [{ id, username, imageUrl?, caption? }, ...]
        setPosts(Array.isArray(res) ? res : []);
      } catch {
        // Demo placeholders if API not ready
        const demoPosts = IMAGE_POOL.map((src, i) => ({
          id: i + 1,
          username: `user_${i + 1}`,
          caption: `This is a demo caption for image ${i + 1}.`,
          imageUrl: src,
        }));
        setPosts(demoPosts);
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
