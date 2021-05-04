import React from "react";
import { useActions } from "../../hooks/useActions";
import { IPublication } from "../../types";

function PublicationItem({ _id, name }: IPublication) {
  const { getPublication } = useActions();

  const onGetPublication = () => {
    getPublication(_id);
  };

  return <li onClick={onGetPublication}>{name}</li>;
}

export default PublicationItem;
