import React from "react";
import { CardDeck } from "react-bootstrap";
import { usePostList } from "./usePostList";

function PostList() {
  const { renderPosts } = usePostList();

  return <CardDeck>{renderPosts()}</CardDeck>;
}

export default PostList;
