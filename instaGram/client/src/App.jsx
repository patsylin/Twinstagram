import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LeftNav from "./components/LeftNav.jsx";
import RightRail from "./components/RightRail.jsx";

import AllUsers from "./components/AllUsers.jsx";
import AllPosts from "./components/AllPosts.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Login from "./components/Login.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Layout left={<LeftNav />} right={<RightRail />}>
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/login" element={<Login />} />
          {/* add more routes here later, e.g. Login, Create */}
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
