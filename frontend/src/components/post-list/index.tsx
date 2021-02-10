import React from "react";
import { CardDeck } from "react-bootstrap";
import { usePostList } from "./usePostList";

function PostList() {
  const { renderPosts } = usePostList();

  return <CardDeck className="w-100 d-flex flex-column pt-5">{renderPosts()}</CardDeck>;
}

export default PostList;
