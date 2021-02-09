import React from "react";
import { IPublication } from "../../types";
import PublicationItem from "../publication-item";
import { usePublicationList } from "./usePublicationList";

function PublicationList() {
  const { publications } = usePublicationList();

  return (
    <>
      {publications.map((publication: IPublication) => {
        return <PublicationItem publication={publication} />;
      })}
    </>
  );
}

export default PublicationList;
