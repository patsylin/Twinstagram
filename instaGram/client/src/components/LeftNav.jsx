import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Item({ to, label, icon, onClick }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  // if onClick is passed, use a button instead of Link
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`ig-nav-item ${active ? "active" : ""}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "inherit",
        }}
      >
        <span className="ig-icon" aria-hidden>
          {icon}
        </span>
        <span className="ig-nav-label">{label}</span>
      </button>
    );
  }

  return (
    <Link to={to} className={`ig-nav-item ${active ? "active" : ""}`}>
      <span className="ig-icon" aria-hidden>
        {icon}
      </span>
      <span className="ig-nav-label">{label}</span>
    </Link>
  );
}

export default function LeftNav() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/"); // kick back to home
  }

  return (
    <nav className="ig-left-nav">
      <div className="ig-brand">TwinstaGram</div>
      <Item to="/" label="Home" icon="🏠" />
      <Item to="/users" label="Following " icon="👥" />
      <Item to="/users/new" label="Create" icon="➕" />

      {user ? (
        <Item
          to="/"
          label={`Logout (${user.username})`}
          icon="🚪"
          onClick={handleLogout}
        />
      ) : (
        <Item to="/login" label="Login" icon="🔑" />
      )}

      <div className="ig-left-spacer" />
      <Item to="/about" label="More" icon="☰" />
    </nav>
  );
}
