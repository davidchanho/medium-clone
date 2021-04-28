import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { userSelectors } from "../../store";

function Saved() {
  const { user } = useSelector(userSelectors);

  return (
    <ListGroup>
      {user?.bookmarks.map((bookmark) => (
        <ListGroupItem key={`saved-${bookmark._id}`}>
          {bookmark.title}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default Saved;
