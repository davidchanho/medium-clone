import React from "react";
import { Card } from "react-bootstrap";
import { useGetPost } from "../../hooks/useGetPost";
import { IPost } from "../../types";
import Post from "../post";
import PostOptions from "../post-options";
import PostImg from "../post/PostImg";

function PostListItem({ ...post }: IPost) {
  return (
    <Card className="d-flex flex-row mb-1 w-100">
      <Card.Header className="bg-white d-flex justify-content-between pointer w-75">
          <Post {...post} excerpt={60} />
        <PostOptions {...post} />
      </Card.Header>
      <Card.Body className="w-25">
        <PostImg {...post} />
      </Card.Body>
    </Card>
  );
}

export default PostListItem;
