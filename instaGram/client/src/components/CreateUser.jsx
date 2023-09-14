import React, { useEffect, useState } from "react";
import { fetchCreateUser } from "../../fetching";

const CreateUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchCreateUser();
      setUsers(result);
      console.log(result);
    };

    getUsers();
  }, []);
  return (
    <>
      <h1>Create User</h1>
      {users.map((user) => {
        return <div key={user.user_id}>{user.username}</div>;
      })}
    </>
  );
};

export default CreateUser;
