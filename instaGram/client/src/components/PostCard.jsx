export default function PostCard({
  username = "username",
  imageUrl,
  caption = "",
}) {
  return (
    <article className="ig-card">
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

      <div className="ig-card-img">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
      </div>

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
          <div>
            <strong>{username}</strong> {caption}
          </div>
        )}
      </div>
    </article>
  );
}
