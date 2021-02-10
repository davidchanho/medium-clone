import React from "react";
import { useSelector } from "react-redux";
import { publicationSelectors } from "../../store";
import { IPublication } from "../../types";
import PublicationItem from "../publication-item";

function PublicationList() {
  const { publications } = useSelector(publicationSelectors);

  return (
    <>
      {publications.map((publication: IPublication) => {
        return <PublicationItem publication={publication} />;
      })}
    </>
  );
}

export default PublicationList;
