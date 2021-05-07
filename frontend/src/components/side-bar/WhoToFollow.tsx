import React from "react";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store";
import { IUser } from "../../types";
import Creator from "../posts-hero/Creator";

function WhoToFollow() {
  const { users } = useSelector(userSelectors);
  return (
    <div>
      <div>WHO TO FOLLOW</div>

      <div>
        <ul>
          {users.slice(0, 3).map((user: IUser) => {
            return <Creator key={`creators-to-follow-${user._id}`} {...user} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default WhoToFollow;
