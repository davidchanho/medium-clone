import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function PostOptions({ post }: PostProps) {
  const { onDeletePost } = usePost(post);

  return (
    <Dropdown className="mt-auto d-flex align-items-center justify-content-between">
      <Dropdown.ItemText className="p-0">
        <BsBookmark />
      </Dropdown.ItemText>

      <Dropdown.Toggle className="border-0 bg-white text-secondary shadow-none">
        <BsThreeDots />
      </Dropdown.Toggle>
      <Dropdown.Menu className="d-flex flex-column">
        <Dropdown.Item onClick={onDeletePost}>Dismiss This Post</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PostOptions;
