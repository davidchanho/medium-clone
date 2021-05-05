import React from "react";
import Bookmark from "../bookmark";
import { IPost } from "../../types";
import PostOption from "./PostOption";
import { IconThreeDots } from "../icons";

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
