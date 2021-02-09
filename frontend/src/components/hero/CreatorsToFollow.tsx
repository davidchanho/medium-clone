import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store";
import { IUser } from "../../types";
import FellowCreator from "../side-bar/FollowCreator";

function CreatorsToFollow() {
  const { users } = useSelector(userSelectors);

  return (
    <div>
      <p className="text-uppercase font-weight-bold">Creators to follow</p>{" "}
      <ListGroup>
        {users.slice(0, 2).map((user: IUser) => {
          return (
            <FellowCreator imgStyles='rounded-circle' key={`follow-creators-${user?._id}`} user={user} />
          );
        })}
      </ListGroup>
    </div>
  );
}

export default CreatorsToFollow;
