import React, { useEffect, useState } from "react";
import { fetchSingleUser } from "../../fetching";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const {user_id} = useParams();

  useEffect(() => {
    const getUser = async () => {
      const result = await fetchSingleUser(user_id);
      setUser(result);
      console.log(result);
    };

    getUser();
  }, []);
  return (
    <>
      <h1>Single User</h1>
    <div>{user.username}</div>
    </>
  );
};

export default SingleUser;
