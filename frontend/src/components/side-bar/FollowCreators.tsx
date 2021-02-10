import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { userSelectors } from "../../store";
import FellowCreator from "./FollowCreator";

function FollowCreators() {
  const { users, loading, error } = useSelector(userSelectors);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!users) {
    return null;
  }

  const renderUsers = () => {
    return users.slice(0, 3).map((user) => {
      return (
        <FellowCreator
          className="bg-light"
          imgStyles="rounded"
          key={`follow-creators-${user?._id}`}
          user={user}
        />
      );
    });
  };

  return (
    <Card className="mb-4">
      <Card.Body className="bg-light">
        <h6 className="font-weight-bold text-uppercase">who to follow</h6>
        <ListGroup>{renderUsers()}</ListGroup>
      </Card.Body>
    </Card>
  );
}

export default FollowCreators;
