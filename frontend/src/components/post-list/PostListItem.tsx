import React from "react";
import { Card } from "react-bootstrap";
import { PostProps } from "../../types";
import PostDate from "../../shared/post/PostDate";
import PostHeader from "../../shared/post/PostHeader";
import PostImg from "../../shared/post/PostImg";
import PostOptions from "../../shared/post/PostOptions";
import PostSubtitle from "../../shared/post/PostSubtitle";
import PostTitle from "../../shared/post/PostTitle";
import { usePost } from "../../shared/post/usePost";

function PostListItem({ post }: PostProps) {
  const { onGetPost } = usePost(post);

  return (
    <Card className="d-flex flex-row align-items-center mb-1 w-100">
      <Card.Header className="bg-white d-flex justify-content-between pointer w-75">
        <div className="pointer" onClick={onGetPost}>
          <PostHeader post={post} />
          <PostTitle post={post} />
          <PostSubtitle post={post} />
          <PostDate post={post} />
        </div>
        <PostOptions post={post} />
      </Card.Header>
      <Card.Body className="w-25">
        <PostImg post={post} />
      </Card.Body>
    </Card>
  );
}

export default PostListItem;
