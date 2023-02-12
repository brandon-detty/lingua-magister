import { useLoaderData, type LoaderFunction } from "react-router-dom";

export const textLoader: LoaderFunction = async ({ params }) => {
  return params.id;
};

const Text = () => {
  const text = useLoaderData();

  return <>Text {text}</>;
};

export default Text;
