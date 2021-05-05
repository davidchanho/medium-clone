import React from "react";
import { useSelector } from "react-redux";
import { userSelectors } from "../../../../store";
import { IUser } from "../../../../types";
import Creator from "./Creator";

function CreatorsToFollow() {
  const { users } = useSelector(userSelectors);

  return (
    <div>
      <p>Creators to follow</p>{" "}
      <ul>
        {users.slice(0, 2).map((user: IUser) => {
          return <Creator key={`creators-to-follow-${user._id}`} {...user} />;
        })}
      </ul>
    </div>
  );
}

export default CreatorsToFollow;
