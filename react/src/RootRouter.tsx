import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Text from "./views/Text/Text";
import textLoader from "./views/Text/textLoader";
import TextList from "./views/TextList";

import RootTemplate from "./RootTemplate";
import ServerError from "./components/ServerError";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    errorElement: <ServerError />,
    children: [
      { path: "/library", element: <TextList /> },
      { path: "/text/:id", element: <Text />, loader: textLoader },
    ],
  },
]);

const RootRouter = () => <RouterProvider router={rootRouter} />;

export default RootRouter;
