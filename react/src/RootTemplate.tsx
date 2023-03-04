import { Link, Outlet } from "react-router-dom";

const RootTemplate = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg bg-white h-screen">
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
        </nav>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootTemplate;
