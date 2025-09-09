import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllUsers } from "@/fetching.js";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchAllUsers();
      setUsers(Array.isArray(result) ? result : []);
    })();
  }, []);

  return (
    <>
      <h1>All Users</h1>
      {users.length === 0 && <p>No users yet.</p>}
      {users.map((u) => (
        <div key={u.user_id ?? u.id}>
          <Link to={`/users/${u.user_id ?? u.id}`}>{u.username}</Link>
        </div>
      ))}
    </>
  );
}
