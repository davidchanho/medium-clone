import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { userSelectors } from "../../store";
import FellowCreator from "./FollowCreator";

function FollowCreators() {
  const { users } = useSelector(userSelectors);

  return (
    <Card className="mb-4">
      <Card.Body className="bg-light">
        <h6 className="font-weight-bold text-uppercase">who to follow</h6>
        <ListGroup>
          {users.slice(0, 3).map((user) => {
            return (
              <FellowCreator key={`follow-creators-${user?._id}`} user={user} />
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default FollowCreators;
