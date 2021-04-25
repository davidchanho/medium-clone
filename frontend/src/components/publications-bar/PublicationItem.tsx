import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { IPublication } from "../../store/publications/types";

function PublicationItem({ _id, name }: IPublication) {
  const { getPublication } = useActions();

  const onGetPublication = () => {
    getPublication(_id);
  };

  return (
    <ListGroupItem action key={_id} onClick={onGetPublication}>
      {name}
    </ListGroupItem>
  );
}

export default PublicationItem;
