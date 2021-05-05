import React from "react";
import { useActions } from "../../hooks/useActions";
import { IPost } from "../../types";

interface PostOptionProps extends IPost {
  label: string;
}

function PostOption({ label, _id }: PostOptionProps) {
  const { dismissPost } = useActions();

  const onDismissPost = () => {
    if (_id) {
      dismissPost(_id);
    }
  };

  return <li onClick={onDismissPost}>{label}</li>;
}

export default PostOption;
