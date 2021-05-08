import React from "react";
import { Button } from "react-bootstrap";
import { TopicProps, UserProps } from "../../../types";

function FollowButton({ user, topic }: UserProps & TopicProps) {
  return (
    <Button variant="success" className="pill">
      Follow
    </Button>
  );
}

export default FollowButton;
