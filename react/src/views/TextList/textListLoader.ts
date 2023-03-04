import { type LoaderFunction } from "react-router-dom";

import makeRequest from "../../api/makeRequest";

const textListLoader: LoaderFunction = async ({ params }) => {
  const text = await makeRequest(`text`);
  return text;
};

export default textListLoader;
