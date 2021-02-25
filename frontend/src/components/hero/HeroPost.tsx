import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { postSelectors } from "../../store";
import PostHeader from "../post/PostHeader";
import PostImg from "../post/PostImg";
import PostSubtitle from "../post/PostSubtitle";
import PostTitle from "../post/PostTitle";

function HeroPost() {
  const { hero, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!hero) {
    return null;
  }

  return (
    <Card key={`hero-${hero._id}`}>
      <NavLink to={`/${hero._id}`} className="text-secondary">
        <PostImg post={hero} className="mb-2 h-100 w-100" />
        <PostHeader post={hero} className="mb-2" />
        <PostTitle post={hero} className="mb-2" />
        <PostSubtitle post={hero} className="mb-2" />
      </NavLink>
      <div className="text-secondary d-flex">
        <NavLink to={`/${hero._id}`}>Read More</NavLink> &middot;{" "}
        {hero.readingTime}
      </div>
    </Card>
  );
}

export default HeroPost;
