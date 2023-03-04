import { useEffect, useState } from "react";
import makeRequest from "../../api/makeRequest";
import { isLibrary, Library } from "@lingua-magister/types";
import { Link, useLoaderData } from "react-router-dom";
import PageHeading from "../../components/PageHeading";

const TextList = () => {
  const lib = useLoaderData() as Library;

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
