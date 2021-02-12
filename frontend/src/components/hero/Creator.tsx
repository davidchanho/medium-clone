import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { IUser } from "../../store/users/types";

interface CreatorProps {
  user: IUser;
}

function Creator({ user }: CreatorProps) {
  return (
    <ListGroupItem className="w-100 d-flex justify-content-between">
      <img src={user.photo} className="rounded-circle" />

      <div className="w-50 mx-2">
        <p className="font-weight-bold">{user.name}</p>
        <p>{clampText(user.about, 35)}</p>
      </div>

      <Button variant="success" className="h-50 my-auto">
        Follow
      </Button>
    </ListGroupItem>
  );
}

export default Creator;
