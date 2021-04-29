import React from "react";
import { Button, ListGroupItem, ListGroupItemProps } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { IUser } from "../../types";

function Creator({
  photo,
  name,
  about,
  className,
  ...props
}: IUser & ListGroupItemProps) {
  return (
    <ListGroupItem
      className={`w-100 border-0 d-flex align-items-center justify-content-between ${className}`}
      {...props}
    >
      <img src={photo} alt="creator avatar" className="rounded-circle" width='60' height='60' />

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
