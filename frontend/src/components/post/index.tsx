import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import PostDate from "./PostDate";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";
import { usePost } from "./usePost";

function Post({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <Card
      className="d-flex flex-column bg-inherit pointer mb-2"
      onClick={onGetPost}
    >
      <PostHeader post={post} />
      <PostTitle post={post} />
      <PostDate post={post} />
    </Card>
  );
}

export default Post;
