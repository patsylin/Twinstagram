// src/components/AllPosts.jsx
import { useEffect, useState } from "react";
import { fetchAllPosts } from "../fetching.js"; // adjust the ../ if the depth differs
import PostCard from "./PostCard.jsx";
import { IMAGES } from "../data/images.js";
import { CAPTION_BY_FILE } from "../data/captions.js";
import { USERS, normalizeHandle } from "../data/users.js";
import { POSTS as LOCAL_POSTS } from "../data/posts.js";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchAllPosts();

        if (Array.isArray(res) && res.length > 0) {
          // Normalize any legacy usernames coming from the API
          const withHandles = res.map((p, i) => ({
            id: p.id ?? i + 1,
            ...p,
            username: normalizeHandle(p.username),
          }));
          setPosts(withHandles);
          return;
        }
        throw new Error("Empty/invalid API result");
      } catch (err) {
        console.warn("[AllPosts] API unavailable, using local data.", err);

        // 1) Preferred fallback: local generator already using USERS handles
        if (Array.isArray(LOCAL_POSTS) && LOCAL_POSTS.length) {
          setPosts(LOCAL_POSTS);
          return;
        }

        // 2) Final fallback: build from IMAGES + captions and rotate USERS handles
        const demo = IMAGES.map(({ filename, url }, i) => {
          const caption = CAPTION_BY_FILE[filename];
          if (!caption) console.warn(`⚠️ Missing caption for: ${filename}`);

          const u = USERS[i % USERS.length];
          return {
            id: i + 1,
            username: u.handle, // use real IG-style handle
            imageUrl: url,
            caption: caption || `[NO CAPTION for ${filename}]`,
          };
        });

        setPosts(demo);
        console.table(
          demo.map((d) => ({
            image: d.imageUrl,
            caption: d.caption,
            user: d.username,
          }))
        );
      }
    })();
  }, []);

  return (
    <div className="ig-feed-inner">
      {posts.map((p, i) => (
        <PostCard
          key={p.id ?? `${p.username}-${i}`}
          id={`p_${p.id ?? i + 1}`}
          username={normalizeHandle(p.username)}
          imageUrl={p.imageUrl}
          caption={p.caption}
        />
      ))}
    </div>
  );
}
