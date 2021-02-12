import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { IUser } from "../../store/users/types";

interface FollowCreatorProps {
  user: IUser;
  className?: string;
  imgStyles?: string;
}

function FollowCreator({ user, className, imgStyles }: FollowCreatorProps) {
  if (!user) {
    return null;
  }

  const { photo, name, about } = user;

  return (
    <ListGroupItem
      className={`w-100 d-flex justify-content-between ${className}`}
    >
      <img src={photo} className={`${imgStyles}`} />

      <div className="w-50 mx-2">
        <p className="font-weight-bold">{name}</p>
        <p>{clampText(about, 35)}</p>
      </div>

      <Button variant="success" className="h-50 my-auto">
        Follow
      </Button>
    </ListGroupItem>
  );
}

export default FollowCreator;
