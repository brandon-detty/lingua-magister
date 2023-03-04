import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootTemplate from "./RootTemplate";
import ServerError from "./components/ServerError";

import Text from "./views/Text/Text";
import textLoader from "./views/Text/textLoader";
import TextList from "./views/TextList/TextList";
import textListLoader from "./views/TextList/textListLoader";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    errorElement: <ServerError />,
    children: [
      { path: "/library", element: <TextList />, loader: textListLoader },
      { path: "/text/:id", element: <Text />, loader: textLoader },
    ],
  },
]);

const RootRouter = () => <RouterProvider router={rootRouter} />;

export default RootRouter;
