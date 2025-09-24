import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext.jsx";
import { userByHandle, normalizeHandle } from "../data/users";

export default function PostCard({
  id = "p_1",
  username = "username",
  imageUrl,
  caption = "",
  onOpenComments,
}) {
  const { user } = useAuth(); // logged-in user (for comments)
  const handle = normalizeHandle(username);
  const profile = userByHandle(handle) || { handle, name: "", avatar: "" };

  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);

  const [comments, setComments] = React.useState([]); // { author, text }
  const commentInputRef = React.useRef(null);

  const fallback = "https://picsum.photos/seed/twinstagram-fallback/600/600";

  function handleLike() {
    setLiked((v) => !v);
    setLikeCount((c) => (liked ? Math.max(0, c - 1) : c + 1));
  }

  function handleCommentButton() {
    if (typeof onOpenComments === "function") return onOpenComments(id);
    commentInputRef.current?.focus();
  }

  async function handleShare() {
    const url = `${window.location.origin}/post/${id}`;
    try {
      await navigator.clipboard.writeText(url);
      alert("Post link copied!");
    } catch {
      prompt("Copy this link:", url);
    }
  }

  function handleSave() {
    setSaved((v) => !v);
  }

  function handleAddComment(e) {
    if (e.key !== "Enter") return;
    const val = e.currentTarget.value.trim();
    if (!val) return;
    const author = user?.username || "guest";
    setComments((prev) => [...prev, { author, text: val }]);
    e.currentTarget.value = "";
  }

  return (
    <article className="ig-card">
      {/* header */}
      <div
        className="ig-card-head"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.handle}
            className="ig-avatar sm"
            style={{ width: 32, height: 32, borderRadius: "50%" }}
          />
        ) : (
          <div className="ig-avatar sm" />
        )}
        <div
          style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}
        >
          <strong>{profile.handle}</strong>
          {profile.name && (
            <span className="ig-muted" style={{ fontSize: 12 }}>
              {profile.name}
            </span>
          )}
          <span className="ig-muted" style={{ fontSize: 12 }}>
            • 1h
          </span>
        </div>
        <div style={{ marginLeft: "auto", opacity: 0.7 }}>⋯</div>
      </div>

      {/* image (this was missing) */}
      <div
        className="ig-card-img"
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {!loaded && imageUrl && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03), rgba(255,255,255,0.06))",
              pointerEvents: loaded ? "none" : "auto",
            }}
          >
            Loading…
          </div>
        )}

        {imageUrl && (
          <img
            src={error ? fallback : imageUrl}
            alt={caption || "post image"}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={(e) => {
              console.error("Image failed to load:", imageUrl, e);
              setError(true);
              setLoaded(true);
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        )}
      </div>

      {/* footer */}
      <div
        className="ig-card-foot"
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
      >
        <div style={{ display: "flex", gap: 12, fontSize: 20, width: "100%" }}>
          <button
            type="button"
            className="ig-icon-btn"
            aria-pressed={liked}
            onClick={handleLike}
            title={liked ? "Unlike" : "Like"}
          >
            {liked ? "❤️" : "♡"}
          </button>
          <button
            type="button"
            className="ig-icon-btn"
            onClick={handleCommentButton}
            title="Comment"
          >
            💬
          </button>
          <button
            type="button"
            className="ig-icon-btn"
            onClick={handleShare}
            title="Share"
          >
            ↗
          </button>
          <div style={{ marginLeft: "auto" }}>
            <button
              type="button"
              className="ig-icon-btn"
              aria-pressed={saved}
              onClick={handleSave}
              title={saved ? "Unsave" : "Save"}
            >
              🔖
            </button>
          </div>
        </div>

        {likeCount > 0 && (
          <div style={{ fontWeight: 600, paddingLeft: 2 }}>
            {likeCount} like{likeCount === 1 ? "" : "s"}
          </div>
        )}

        {caption && (
          <div style={{ fontSize: "0.95rem", lineHeight: 1.4 }}>
            <strong>{profile.handle}</strong> {caption}
          </div>
        )}

        {comments.length > 0 && (
          <div style={{ marginTop: 4, display: "grid", gap: 4 }}>
            {comments.map((c, i) => (
              <div key={i} style={{ fontSize: "0.92rem" }}>
                <strong>{c.author}</strong> {c.text}
              </div>
            ))}
          </div>
        )}

        <input
          ref={commentInputRef}
          type="text"
          placeholder="Add a comment…"
          className="ig-input"
          style={{
            width: "100%",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 8,
            padding: "8px 10px",
            color: "inherit",
          }}
          onKeyDown={handleAddComment}
        />
      </div>
    </article>
  );
}

PostCard.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  caption: PropTypes.string,
  onOpenComments: PropTypes.func,
};
