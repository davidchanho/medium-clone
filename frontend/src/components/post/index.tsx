import React from "react";
import { Card } from "react-bootstrap";
import { useGetPost } from "../../hooks/useGetPost";
import { IPost } from "../../types";
import PostDate from "./PostDate";
import PostHeader from "./PostHeader";
import PostTitle from "./PostTitle";

function Post({ ...post }: IPost) {
  const { onGetPost } = useGetPost(post);

  return (
    <Card
      className="d-flex flex-column bg-inherit pointer mb-2"
      onClick={onGetPost}
    >
      <PostHeader {...post} />
      <PostTitle {...post} />
      <PostDate {...post} />
    </Card>
  );
}

export default Post;
