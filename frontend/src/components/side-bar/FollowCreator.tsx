import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { FollowCreatorProps } from "./types";

function FollowCreator({ user }: FollowCreatorProps) {
  if (!user) {
    return null;
  }

  return (
    <ListGroupItem className="w-100 bg-light d-flex align-items-center justify-content-between">
      <img src={user?.avatar} className="rounded w-25" />

      <div className="w-50">
        <p className="mx-2">{user?.name}</p>
        <p className="mx-2">{clampText(user?.about, 15)}</p>
      </div>

      <Button>Follow</Button>
    </ListGroupItem>
  );
}

export default FollowCreator;
