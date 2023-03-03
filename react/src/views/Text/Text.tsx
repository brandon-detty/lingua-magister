import { useLoaderData, type LoaderFunction } from "react-router-dom";

import { isText } from "@lingua-magister/types";

import makeRequest from "../../api/makeRequest";
import splitText from "./splitText";
import Word from "./Word";

export const textLoader: LoaderFunction = async ({ params }) => {
  const text = await makeRequest(`text/${params.id}`);
  return text;
};

const Text = () => {
  const text = useLoaderData();
  const words = isText(text) ? splitText(text.body) : ["Loading..."];

  return (
    <>
      {isText(text) && (
        <>
          <h3>{text.title}</h3>
          <div>
            {words.map((w) => (
              <Word word={w} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Text;
