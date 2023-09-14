import React, { useEffect, useState } from "react";
import { fetchUpdateUser } from "../../fetching";

const UpdateUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchUpdateUser();
      setUsers(result);
      console.log(result);
    };

    getUsers();
  }, []);
  return (
    <>
      <h1>Update User</h1>
      {users.map((user) => {
        return <div key={user.user_id}>{user.username}</div>;
      })}
    </>
  );
};

export default UpdateUser;
