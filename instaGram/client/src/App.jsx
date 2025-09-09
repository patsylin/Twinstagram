// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import AllUsers from "./components/AllUsers.jsx";
import SingleUser from "./components/SingleUser.jsx";
import CreateUser from "./components/CreateUser.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import RemoveUser from "./components/RemoveUser.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Home → show users list */}
        <Route path="/" element={<AllUsers />} />

        {/* users */}
        <Route path="/users" element={<AllUsers />} />
        <Route path="/users/new" element={<CreateUser />} />
        <Route path="/users/:user_id" element={<SingleUser />} />
        <Route path="/users/:user_id/edit" element={<UpdateUser />} />
        <Route path="/users/:user_id/delete" element={<RemoveUser />} />

        {/* add posts/login/register later when those files exist */}
      </Routes>
    </>
  );
}
