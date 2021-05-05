import React from "react";
import { IPost } from "../../types";
import Bookmark from "../_shared/bookmark";
import { IconThreeDots } from "../_shared/icons";
import PostOption from "./PostOption";

const options = [
  "Dismiss this story",
  "Mute this author",
  "Mute this publication",
  "Report this story",
  "Block this author",
];

function PostOptions({ ...post }: IPost) {
  return (
    <div>
      <div>
        <Bookmark />
      </div>

      <div>
        <IconThreeDots />
      </div>

      <div>
        {options.map((option) => {
          return <PostOption key={option} {...post} label={option} />;
        })}
      </div>
    </div>
  );
}

export default PostOptions;
