import React from "react";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types";

interface PostOptionProps extends IPost {
  label: string;
}

function PostOption({ label, _id }: PostOptionProps) {
  const { deletePost } = useActions();

  const onDeletePost = () => {
    if (_id) {
      deletePost(_id);
    }
  };

  return <li onClick={onDeletePost}>{label}</li>;
}

export default PostOption;
