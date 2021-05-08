import React from "react";
import { Button, ListGroupItem, ListGroupItemProps } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { IUser, UserProps } from "../../types";
import FollowButton from "../buttons/follow-button";

function Creator({
  user,
  className,
  ...props
}: UserProps & ListGroupItemProps) {
  return (
    <ListGroupItem
      className={`w-100 border-0 d-flex align-items-center justify-content-between ${className}`}
      {...props}
    >
      <img src={user?.photo} alt="creator avatar" className="rounded-circle" width='60' height='60' />

      <div className="w-50 mx-2">
        <p className="font-weight-bold">{user?.name}</p>
        <p>{user?.about && clampText(user?.about, 35)}</p>
      </div>

      <FollowButton user={user}/>
    </ListGroupItem>
  );
}

export default Creator;
