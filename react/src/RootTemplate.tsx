import { Link, Outlet } from "react-router-dom";

import useThemeConfig from "./shared/hooks/useThemeConfig";

const RootTemplate = () => {
  const t = useThemeConfig();
  return (
    <>
      <div className="container mx-auto max-w-screen-lg bg-white h-screen">
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
        </nav>
        <div className={t.padding.p}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootTemplate;
