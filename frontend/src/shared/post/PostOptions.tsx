import React from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { PostProps } from "../../store/posts/types";
import Bookmark from "../bookmark";
import { usePost } from "./usePost";

function PostOptions({ post }: PostProps) {
  const { onDeletePost } = usePost(post);

  return (
    <Dropdown className="mt-auto d-flex align-items-center justify-content-between">
      <Dropdown.ItemText className="p-0">
        <Bookmark post={post} />
      </Dropdown.ItemText>

      <Dropdown.Toggle className="ml-2 bg-white text-secondary shadow-none">
        <BsThreeDots />
      </Dropdown.Toggle>
      <Dropdown.Menu className="d-flex flex-column">
        <Dropdown.Item onClick={onDeletePost}>Dismiss this story</Dropdown.Item>
        <Dropdown.Item onClick={onDeletePost}>Mute this author</Dropdown.Item>
        <Dropdown.Item onClick={onDeletePost}>
          Mute this publication
        </Dropdown.Item>
        <Dropdown.Item onClick={onDeletePost}>Report this story</Dropdown.Item>
        <Dropdown.Item onClick={onDeletePost}>Block this author</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PostOptions;
