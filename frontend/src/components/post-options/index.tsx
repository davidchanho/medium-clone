import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IPost } from "../../types";
import Bookmark from "../bookmark";
import PostOption from "./PostOption";
import styles from "./index.module.scss";

const options = [
  "Dismiss this story",
  "Mute this author",
  "Mute this publication",
  "Report this story",
  "Block this author",
];

function PostOptions({ ...post }: IPost) {
  return (
    <div className={styles.options}>
      <div>
        <Bookmark />
      </div>

      <div>
        <BsThreeDots />
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
