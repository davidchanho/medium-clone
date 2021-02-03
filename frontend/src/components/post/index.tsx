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
    <Card className="my-2 d-flex flex-row align-items-center">
      <Card.Header className="bg-white d-flex justify-content-between p-0 pointer">
        <div className="pointer" onClick={onGetPost}>
          <PostHeader post={post} />
          <PostTitle post={post} />
          <PostDate post={post} />
        </div>
      </Card.Header>
    </Card>
  );
}

export default Post;
