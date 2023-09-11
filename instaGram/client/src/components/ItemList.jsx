
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemList({ users }) {
  const navigate = useNavigate();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <button
            onClick={() => {
              navigate(`/${user.id}`);
            }}
          >
            See Details
          </button>
        </div>
      ))}
    </div>
  );
}
