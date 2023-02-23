import { useLoaderData, type LoaderFunction } from "react-router-dom";

import { isText } from "@lingua-magister/types";

import makeRequest from "../api/makeRequest";

export const textLoader: LoaderFunction = async ({ params }) => {
  const text = await makeRequest(`text/${params.id}`);
  return text;
};

const Text = () => {
  const text = useLoaderData();

  return (
    <>
      {isText(text) && (
        <>
          <h3>{text.title}</h3>
          <div>{text.body}</div>
        </>
      )}
    </>
  );
};

export default Text;
