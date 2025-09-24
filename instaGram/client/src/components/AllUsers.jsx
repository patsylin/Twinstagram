// src/components/AllUsers.jsx
import { USERS } from "../data/users.js";
import { Link } from "react-router-dom";

export default function AllUsers() {
  const users = USERS; // swap to API later if you add one

  return (
    <div className="ig-page">
      <h1>Following</h1>

      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <ul style={{ display: "grid", gap: 12, maxWidth: 560 }}>
          {users.map((u) => (
            <li
              key={u.handle}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 12,
                borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={u.avatar || "/images/avatars/default.png"}
                alt={u.handle}
                style={{ width: 44, height: 44, borderRadius: "50%" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{u.handle}</div>
                {u.name && (
                  <div className="ig-muted" style={{ fontSize: 13 }}>
                    {u.name}
                  </div>
                )}
              </div>

              {/* Optional: if you add a user profile route later */}
              {/* <Link to={`/users/${u.handle}`} className="ig-btn sm">View</Link> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
