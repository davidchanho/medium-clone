import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { userSelectors } from "../../store";

function Saved() {
  const { user } = useSelector(userSelectors);

  const renderUser = () => {
    return user?.bookmarks.map((bookmark) => {
      return (
        <ListGroupItem key={`saved-${bookmark._id}`}>
          {bookmark.title}
        </ListGroupItem>
      );
    });
  };

  return <ListGroup>{renderUser()}</ListGroup>;
}

export default Saved;
