import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRemoveUser } from "@/fetching";

export default function RemoveUser() {
  const { user_id } = useParams();
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await fetchRemoveUser("users", user_id);
      navigate("/users");
    } catch (err) {
      console.error(err);
      alert("Error deleting user");
    }
  }

  return (
    <>
      <h1>Remove User</h1>
      <p>Are you sure you want to delete user #{user_id}?</p>
      <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={() => navigate(-1)} style={{ marginLeft: 8 }}>
        Cancel
      </button>
    </>
  );
}
