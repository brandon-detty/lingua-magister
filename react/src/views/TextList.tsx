import { useEffect, useState } from "react";
import makeRequest from "../api/makeRequest";
import { isLibrary, Library } from "@lingua-magister/types";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";

const TextList = () => {
  const [lib, setLib] = useState<Library | null>(null);
  useEffect(() => {
    makeRequest("text").then((l) => {
      setLib(l);
    });
  }, []);

  return (
    <>
      <PageHeading>Library</PageHeading>
      <ul>
        {isLibrary(lib) &&
          lib.map((t) => (
            <li>
              <Link to={`/text/${t.id}`}>{t.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TextList;
