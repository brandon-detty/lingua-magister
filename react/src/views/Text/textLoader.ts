import { type LoaderFunction } from "react-router-dom";

import makeRequest from "../../api/makeRequest";

const textLoader: LoaderFunction = async ({ params }) => {
  const text = await makeRequest(`text/${params.id}`);
  return text;
};

export default textLoader;
