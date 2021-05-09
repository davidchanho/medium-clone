import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store";
import { IUser } from "../../types";
import Creator from "./Creator";

function CreatorsToFollow() {
  const { users } = useSelector(userSelectors);

  return (
    <div className="w-100">
      <p className="text-uppercase font-weight-bold mb-2">Creators to follow</p>{" "}
      <ListGroup className="w-100">
        {users.slice(0, 2).map((user: IUser) => {
          return <Creator key={`creators-to-follow-${user._id}`} user={user} />;
        })}
      </ListGroup>
    </div>
  );
}

export default CreatorsToFollow;
