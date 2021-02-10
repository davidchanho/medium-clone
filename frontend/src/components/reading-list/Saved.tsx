import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { userSelectors } from "../../store";

function Saved() {
  const { user, loading, error } = useSelector(userSelectors);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <ListGroup>
      {user.bookmarks.map((bookmark) => {
        return (
          <ListGroupItem key={`saved-${bookmark._id}`}>
            {bookmark.title}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}

export default Saved;
