import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem" }}>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/users">Users</Link>
      {" | "}
      <Link to="/users/new">Create User</Link>
    </nav>
  );
}
