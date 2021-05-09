import React from "react";
import { Dropdown } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { PostProps } from "../../types";

interface PostOptionProps extends PostProps {
  label: string;
}

function PostOption({ label, post }: PostOptionProps) {
  const { deletePost } = useActions();

  const onDeletePost = () => {
    if (post?._id) {
      deletePost(post?._id);
    }
  };

  return <Dropdown.Item onClick={onDeletePost}>{label}</Dropdown.Item>;
}

export default PostOption;
