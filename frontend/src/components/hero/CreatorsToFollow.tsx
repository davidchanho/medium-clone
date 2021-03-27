import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store";
import { IUser } from "../../store/users/types";
import Creator from "./Creator";

function CreatorsToFollow() {
  const { users, loading, error } = useSelector(userSelectors);

  const renderCreators = () => {
    return (
      <ListGroup >
        {users.slice(0, 2).map((user: IUser) => {
          return <Creator key={`creators-to-follow-${user._id}`} user={user} />;
        })}
      </ListGroup>
    );
  };

  return (
    <div className="mb-3">
      <p className="text-uppercase font-weight-bold mb-2">Creators to follow</p>{" "}
      {renderCreators()}
    </div>
  );
}

export default CreatorsToFollow;
