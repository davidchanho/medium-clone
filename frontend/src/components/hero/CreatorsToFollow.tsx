import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store";
import { IUser } from "../../store/users/types";
import FellowCreator from "../side-bar/FollowCreator";

function CreatorsToFollow() {
  const { users, loading, error } = useSelector(userSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!users) {
    return null;
  }

  const renderCreators = () => {
    return (
      <ListGroup>
        {users.slice(0, 2).map((user: IUser) => {
          return (
            <FellowCreator
              imgStyles="rounded-circle"
              key={`follow-creators-${user?._id}`}
              user={user}
            />
          );
        })}
      </ListGroup>
    );
  };

  return (
    <div>
      <p className="text-uppercase font-weight-bold">Creators to follow</p>{" "}
      {renderCreators()}
    </div>
  );
}

export default CreatorsToFollow;
