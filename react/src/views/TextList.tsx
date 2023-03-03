import { useEffect, useState } from "react";
import makeRequest from "../api/makeRequest";
import { isLibrary, Library } from "@lingua-magister/types";
import { Link } from "react-router-dom";

const TextList = () => {
  const [lib, setLib] = useState<Library | null>(null);
  useEffect(() => {
    makeRequest("text").then((l) => {
      setLib(l);
    });
  }, []);

  return (
    <>
      <h3>TextList</h3>
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
