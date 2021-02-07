import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { CardDeck } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { IPost } from "../../types";
import FeaturedPost from "../featured-post";

function FeaturedPosts() {
  const { posts, loading, error } = useSelector(postSelectors);

  const [post, setPost] = useState<IPost[]>();

  useEffect(() => {
    setPost(shuffle(posts).slice(0, 4));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!posts) {
    return null;
  }

  if (!post) {
    return null;
  }

  return (
    <CardDeck className="d-flex flex-column border-right">
      {post.map((post) => (
        <FeaturedPost key={`featured-${post._id}`} post={post} />
      ))}
    </CardDeck>
  );
}

export default FeaturedPosts;
