import { useState } from "react";
import { fetchCreateUser } from "@/fetching";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const created = await fetchCreateUser({ username });
      setStatus(`Created user: ${created?.username ?? "(unknown)"}`);
      setUsername("");
    } catch (err) {
      setStatus("Error creating user");
      console.error(err);
    }
  }

  return (
    <>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        />
        <button type="submit">Create</button>
      </form>
      {status && <p>{status}</p>}
    </>
  );
}
