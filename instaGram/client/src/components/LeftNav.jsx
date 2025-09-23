import { Link, useLocation } from "react-router-dom";

function Item({ to, label, icon }) {
  const { pathname } = useLocation();
  const active = pathname === to;
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
  return (
    <nav className="ig-left-nav">
      <div className="ig-brand">TwinstaGram</div>
      <Item to="/" label="Home" icon="🏠" />
      <Item to="/users" label="Users" icon="👥" />
      <Item to="/users/new" label="Create" icon="➕" />
      <div className="ig-left-spacer" />
      <Item to="/about" label="More" icon="☰" />
    </nav>
  );
}
