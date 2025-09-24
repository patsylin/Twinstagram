import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext.jsx";
import { userByHandle } from "../data/users";

export default function PostCard({
  id = "p_1",
  username = "username",
  imageUrl,
  caption = "",
  onOpenComments,
}) {
  const { user } = useAuth(); // current logged-in user

  // Lookup profile info (handle, display name, avatar)
  const profile = userByHandle(username) || {
    handle: username,
    name: "",
    avatar: "",
  };

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

      {/* caption */}
      {caption && (
        <div style={{ fontSize: "0.95rem", lineHeight: 1.4, marginTop: 8 }}>
          <strong>{profile.handle}</strong> {caption}
        </div>
      )}
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
