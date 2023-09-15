import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../../fetching";

const All = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchAllPosts();
      setUsers(result);
      console.log(result);
    };

    getUsers();
  }, []);
  return (
    <>
      <h1>All Posts</h1>
      {users.map((user) => {
        return <div key={post.post_id}>{user.username}</div>;
      })}
    </>
  );
};

export default AllPosts;
