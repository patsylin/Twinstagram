import React, { useEffect, useState } from "react";
import { fetchRemoveUser } from "../../fetching";

const RemoveUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchRemoveUser();
      setUsers(result);
      console.log(result);
    };

    getUsers();
  }, []);
  return (
    <>
      <h1>Remove User</h1>
      {users.map((user) => {
        return <div key={user.user_id}>{user.username}</div>;
      })}
    </>
  );
};

export default RemoveUser;
