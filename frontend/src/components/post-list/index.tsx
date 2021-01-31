import React, { useEffect } from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { postSelectors } from "../../store";
import Post from "../post";

function PostList() {
  const { fetchPosts } = useActions();
  const { posts, loading, error } = useSelector(postSelectors);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      return <h2>{error}</h2>;
    }

    return posts?.map((post) => <Post post={post} />);
  };

  return <CardDeck>{renderPosts()}</CardDeck>;
}

export default PostList;
