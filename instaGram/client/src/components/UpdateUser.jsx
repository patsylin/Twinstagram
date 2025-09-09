import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleUser, fetchUpdateUser } from "@/fetching";

export default function UpdateUser() {
  const { user_id } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const u = await fetchSingleUser(user_id);
      setUsername(u?.username ?? "");
    })();
  }, [user_id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const updated = await fetchUpdateUser("users", user_id, { username });
      setStatus("Updated!");
      navigate(`/users/${user_id}`);
    } catch (err) {
      console.error(err);
      setStatus("Error updating user");
    }
  }

  return (
    <>
      <h1>Update User</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 320 }}
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        />
        <button type="submit">Save</button>
      </form>
      {status && <p>{status}</p>}
    </>
  );
}
