import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { clampText } from "../../helpers/clampText";
import { userSelectors } from "../../store";
import { IUser } from "../../store/users/types";

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
