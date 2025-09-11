import { useEffect, useState } from "react";
import { fetchAllPosts } from "@/fetching.js";
import PostCard from "./PostCard.jsx";
import { IMAGES } from "../data/images.js";
import { CAPTION_BY_FILE } from "../data/captions.js";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchAllPosts();

        // Use API only if it returns a usable array with imageUrl
        if (Array.isArray(res) && res.length > 0) {
          setPosts(res);
        } else {
          throw new Error("Empty or invalid API result");
        }
      } catch {
        // Fallback: build posts from local bundled images
        const demo = IMAGES.map(({ filename, url }, i) => ({
          id: i + 1,
          username: `user_${(i % 5) + 1}`,
          imageUrl: url,
          caption: CAPTION_BY_FILE[filename] || "",
        }));
        setPosts(demo);
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

// in AllPosts useEffect after building demo
console.log("DEMO POSTS", demo);
