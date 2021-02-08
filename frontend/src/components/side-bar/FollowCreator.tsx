import React from "react";
import { Button, Col, ListGroupItem, Row } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { IUser } from "../../types";

interface FollowCreatorProps {
  user: IUser;
}

function FollowCreator({ user }: FollowCreatorProps) {
  if (!user) {
    return null;
  }

  return (
    <ListGroupItem className="bg-light d-flex align-items-center justify-content-between">
      <Row noGutters>
        <Col sm={2}>
          <img src={user?.avatar} className="rounded w-100" />
        </Col>
        <Col sm={7}>
          <p>{user?.name}</p>
          <p>{clampText(user?.about, 15)}</p>
        </Col>
        <Col sm={3}>
          <Button>Follow</Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

export default FollowCreator;
