import { Link, Outlet } from "react-router-dom";

const RootTemplate = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/text/0">First Text</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default RootTemplate;