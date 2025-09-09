import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { fetchSingleUser, fetchRemoveUser } from "@/fetching";

export default function SingleUser() {
  const [user, setUser] = useState(null);
  const { user_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await fetchSingleUser(user_id);
      setUser(result);
    })();
  }, [user_id]);

  async function handleDelete() {
    try {
      await fetchRemoveUser("users", user_id);
      navigate("/users");
    } catch (err) {
      console.error(err);
      alert("Error deleting user");
    }
  }

  if (!user) return <h1>Loading…</h1>;

  return (
    <>
      <h1>Single User</h1>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>ID:</strong> {user.user_id ?? user.id}
      </div>

      <div style={{ marginTop: 12 }}>
        <Link to={`/users/${user_id}/edit`}>Update</Link>
        {" | "}
        <button onClick={handleDelete} style={{ marginLeft: 8 }}>
          Delete
        </button>
      </div>
    </>
  );
}
