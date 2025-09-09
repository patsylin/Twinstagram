import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LeftNav from "./components/LeftNav.jsx";
import RightRail from "./components/RightRail.jsx";

import AllUsers from "./components/AllUsers.jsx";
import AllPosts from "./components/AllPosts.jsx";

export default function App() {
  return (
    <Layout left={<LeftNav />} right={<RightRail />}>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        {/* keep your user routes too */}
      </Routes>
    </Layout>
  );
}
