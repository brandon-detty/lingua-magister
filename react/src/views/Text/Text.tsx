import { useLoaderData, type LoaderFunction } from "react-router-dom";

import { isText } from "@lingua-magister/types";

import makeRequest from "../../api/makeRequest";
import splitText from "./splitText";
import Word from "./Word";
import fetchDefinition from "../../api/fetchDefnition";
import PageHeading from "../../components/PageHeading";
import useThemeConfig from "../../shared/hooks/useThemeConfig";

export const textLoader: LoaderFunction = async ({ params }) => {
  const text = await makeRequest(`text/${params.id}`);
  return text;
};

const handleWordClick = async (w: string) => {
  const t = await fetchDefinition(w);
  console.log(`"${w}" translates to "${t}"`);
};

const Text = () => {
  const t = useThemeConfig();

  const text = useLoaderData();
  const words = isText(text) ? splitText(text.body) : ["Loading..."];

  return (
    <>
      {isText(text) && (
        <>
          <PageHeading>{text.title}</PageHeading>
          <div className="flex">
            <div className={`grow ${t.padding.pr}`}>
              {words.map((w) => (
                <Word word={w} handleClick={() => handleWordClick(w)} />
              ))}
            </div>
            <div className={`shrink-0 w-64 bg-slate-300 ${t.padding.p}`}>
              translation area
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Text;
