import React from "react";
import PublicationItem from "../publication-item";
import { usePublicationList } from "./usePublicationList";

function PublicationList() {
  const { publications } = usePublicationList();

  return (
    <>
      {publications.map((publication) => {
        return <PublicationItem publication={publication} />;
      })}
    </>
  );
}

export default PublicationList;
