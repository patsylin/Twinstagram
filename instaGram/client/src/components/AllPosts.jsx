import { useEffect, useState } from "react";
import { fetchAllPosts } from "@/fetching.js";
import PostCard from "./PostCard.jsx";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchAllPosts();
        // expected shape: [{ id, username, imageUrl?, caption? }, ...]
        setPosts(Array.isArray(res) ? res : []);
      } catch {
        // demo placeholders if API not ready
        setPosts([
          {
            id: 1,
            username: "missionlocal",
            caption: "Sample caption for demo.",
          },
          { id: 2, username: "sonya", caption: "Another caption example." },
        ]);
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
