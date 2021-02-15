import React from "react";
import { Dropdown } from "react-bootstrap";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../store/posts/types";

interface PostOptionProps {
  post: IPost;
  label: string;
}

function PostOption({ post, label }: PostOptionProps) {
  const { deletePost } = useActions();

  const onDeletePost = () => {
    if (post._id) {
      deletePost(post._id);
    }
  };

  return <Dropdown.Item onClick={onDeletePost}>{label}</Dropdown.Item>;
}

export default PostOption;
