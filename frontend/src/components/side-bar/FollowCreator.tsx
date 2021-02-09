import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { FollowCreatorProps } from "./types";

function FollowCreator({ user, className, imgStyles }: FollowCreatorProps) {
  if (!user) {
    return null;
  }

  const { photo, name, about } = user;

  return (
    <ListGroupItem className={`w-100 d-flex justify-content-between ${className}`}>
      <img src={photo} className={`${imgStyles}`} />

      <div className="w-50">
        <p className="mx-2 font-weight-bold">{name}</p>
        <p className="mx-2">{clampText(about, 35)}</p>
      </div>

      <Button className="h-50 my-auto">Follow</Button>
    </ListGroupItem>
  );
}

export default FollowCreator;
