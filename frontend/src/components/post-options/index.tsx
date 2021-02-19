import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { PostProps } from "../../store/posts/types";
import Bookmark from "../bookmark";
import PostOption from "./PostOption";

const options = [
  "Dismiss this story",
  "Mute this author",
  "Mute this publication",
  "Report this story",
  "Block this author",
];

function PostOptions({ post }: PostProps) {
  if (!post) {
    return null;
  }

  return (
    <Dropdown className="mt-auto d-flex align-items-center justify-content-between">
      <Dropdown.ItemText className="p-0">
        <Bookmark post={post} />
      </Dropdown.ItemText>

      <Dropdown.Toggle className="ml-2 bg-white text-secondary shadow-none">
        <BsThreeDots />
      </Dropdown.Toggle>

      <Dropdown.Menu className="d-flex flex-column">
        {options.map((option) => {
          return <PostOption key={option} post={post} label={option} />;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PostOptions;
