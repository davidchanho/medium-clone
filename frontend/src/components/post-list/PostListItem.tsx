import React from "react";
import { Card } from "react-bootstrap";
import { useGetPost } from "../../hooks/useGetPost";
import { IPost } from "../../types";
import PostOptions from "../post-options";
import PostDate from "../post/PostDate";
import PostHeader from "../post/PostHeader";
import PostImg from "../post/PostImg";
import PostSubtitle from "../post/PostSubtitle";
import PostTitle from "../post/PostTitle";

function PostListItem({ ...post }: IPost) {
  const { onGetPost } = useGetPost(post);

  return (
    <Card className="d-flex flex-row mb-1 w-100">
      <Card.Header className="bg-white d-flex justify-content-between pointer w-75">
        <div className="pointer" onClick={onGetPost}>
          <PostHeader {...post} />
          <PostTitle {...post} />
          <PostSubtitle {...post} />
          <PostDate {...post} />
        </div>

        <PostOptions {...post} />
      </Card.Header>

      <Card.Body className="w-25">
        <PostImg {...post} />
      </Card.Body>
    </Card>
  );
}

export default PostListItem;
