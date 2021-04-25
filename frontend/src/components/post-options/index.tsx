import React from "react";
import { Dropdown } from "react-bootstrap";
import { IPost } from "../../types";
import Bookmark from "../bookmark";
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
    <Dropdown className="mt-auto d-flex align-items-center justify-content-between">
      <Dropdown.ItemText className="p-0">
        <Bookmark />
      </Dropdown.ItemText>

      <Dropdown.Toggle className="ml-2 bg-white text-secondary shadow-none">
        <IconThreeDots />
      </Dropdown.Toggle>

      <Dropdown.Menu className="d-flex flex-column">
        {options.map((option) => {
          return <PostOption key={option} {...post} label={option} />;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PostOptions;
