import { Link, Outlet, useNavigation } from "react-router-dom";

import Loading from "./components/Loading";
import Spinner from "./components/Spinner";
import useThemeConfig from "./shared/hooks/useThemeConfig";

const RootTemplate = () => {
  const t = useThemeConfig();
  const nav = useNavigation();

  return (
    <>
      <div className="flex flex-col container mx-auto max-w-screen-lg bg-white h-screen">
        <nav className={`flex gap-4 ${t.padding.p}`}>
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
        </nav>
        <div className={`relative flex-grow ${t.padding.p}`}>
          <Outlet />
          {nav.state === "loading" && <Loading />}
        </div>
      </div>
    </>
  );
};

export default RootTemplate;
