import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store";
import { IUser } from "../../types";
import Creator from "../hero/Creator";

function WhoToFollow() {
  const { users } = useSelector(userSelectors);
  return (
    <Card className="mb-4">
      <Card.Header className="font-weight-bold text-uppercase d-flex align-items-center">
        WHO TO FOLLOW
      </Card.Header>

      <Card.Body className="bg-light pt-1">
        <ListGroup>
          {users.slice(0, 3).map((user: IUser) => {
            return (
              <Creator
                className="bg-light"
                key={`creators-to-follow-${user._id}`}
                {...user}
              />
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default WhoToFollow;
