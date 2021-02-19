import React from "react";
import { Card } from "react-bootstrap";
import { useGetPost } from "../../hooks/useGetPost";
import { PostProps } from "../../store/posts/types";
import PostOptions from "../post-options";
import PostDate from "../post/PostDate";
import PostHeader from "../post/PostHeader";
import PostImg from "../post/PostImg";
import PostSubtitle from "../post/PostSubtitle";
import PostTitle from "../post/PostTitle";

function PostListItem({ post }: PostProps) {
  const { onGetPost } = useGetPost(post);

  return (
    <Card className="d-flex flex-row mb-1 w-100">
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
