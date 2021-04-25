import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { IUser } from "../../types";

function Creator({ photo, name, about }: IUser) {
  return (
    <ListGroupItem className="w-100 d-flex justify-content-between">
      <img src={photo} className="rounded-circle" />

      <div className="w-50 mx-2">
        <p className="font-weight-bold">{name}</p>
        <p>{about && clampText(about, 35)}</p>
      </div>

      <Button variant="success" className="h-50 my-auto">
        Follow
      </Button>
    </ListGroupItem>
  );
}

export default Creator;
