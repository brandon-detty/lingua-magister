import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Text, { textLoader } from "./views/Text";
import TextList from "./views/TextList";

import RootTemplate from "./RootTemplate";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootTemplate />,
    children: [
      { path: "/library", element: <TextList /> },
      { path: "/text/:id", element: <Text />, loader: textLoader },
    ],
  },
]);

const RootRouter = () => <RouterProvider router={rootRouter} />;

export default RootRouter;
