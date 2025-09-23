import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, login, logout } = useAuth();
  const [name, setName] = React.useState("");
  const nav = useNavigate();

  if (user) {
    return (
      <div style={{ padding: 24 }}>
        <h2>
          You’re signed in as <strong>{user.username}</strong>
        </h2>
        <button onClick={logout}>Log out</button>{" "}
        <button onClick={() => nav("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 24, maxWidth: 420 }}>
      <h2>Log in (demo)</h2>
      <p>Type any name. No password needed — just for development.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim()) return;
          login(name.trim());
          nav("/");
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="username"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            marginBottom: 8,
          }}
        />
        <div style={{ marginTop: 12 }}>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
}
