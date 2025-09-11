import React from "react";

export default function PostCard({
  username = "username",
  imageUrl,
  caption = "",
}) {
  console.log("PostCard rendering:", { username, imageUrl, caption });

  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  // fallback image if something fails
  const fallback = "https://picsum.photos/seed/twinstagram-fallback/600/600";

  return (
    <article className="ig-card">
      {/* header */}
      <div
        className="ig-card-head"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <div className="ig-avatar sm" />
        <div
          style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}
        >
          <strong>{username}</strong>
          <span className="ig-muted" style={{ fontSize: 12 }}>
            • 1h
          </span>
        </div>
        <div style={{ marginLeft: "auto", opacity: 0.7 }}>⋯</div>
      </div>

      {/* image area */}
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
          <button className="ig-icon-btn" aria-label="Like">
            ♡
          </button>
          <button className="ig-icon-btn" aria-label="Comment">
            💬
          </button>
          <button className="ig-icon-btn" aria-label="Share">
            ↗
          </button>
          <div style={{ marginLeft: "auto" }}>
            <button className="ig-icon-btn" aria-label="Save">
              🔖
            </button>
          </div>
        </div>

        {caption && (
          <div style={{ fontSize: "0.95rem", lineHeight: 1.4 }}>
            <strong>{username}</strong> {caption}
          </div>
        )}
      </div>
    </article>
  );
}
