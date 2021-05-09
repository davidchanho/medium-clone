import React from "react";
import { ListGroupItem, ListGroupItemProps } from "react-bootstrap";
import { clampText } from "../../helpers/clampText";
import { UserProps } from "../../types";
import FollowButton from "../buttons/follow-button";

function Creator({
  user,
  className,
}: UserProps & ListGroupItemProps) {
  return (
    <ListGroupItem
      className={`w-100 p-0 border-0 d-flex align-items-center justify-content-between ${className}`}
    >
      <img
        src={user?.photo}
        alt="creator avatar"
        className="rounded-circle"
        width="60"
        height="60"
      />

      <div className="w-75 mx-1">
        <p className="font-weight-bold">{user?.name}</p>
        <p>{user?.about && clampText(user?.about, 35)}</p>
      </div>

      <FollowButton user={user} />
    </ListGroupItem>
  );
}

export default Creator;
