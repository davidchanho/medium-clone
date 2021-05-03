import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { postSelectors } from "../../store";
import Post from "../post";
import PostImg from "../post/PostImg";

function HeroPost() {
  const { hero } = useSelector(postSelectors);

  return (
    <Card>
      <NavLink to={`/${hero?._id}`} className="text-secondary">
        <PostImg {...hero} width={375} height={281.5} />
        <Post {...hero} excerpt={120} />
      </NavLink>
      <div className="text-secondary d-flex">
        <NavLink to={`/${hero?._id}`}>Read More</NavLink> &middot;{" "}
        {hero?.readingTime}
      </div>
    </Card>
  );
}

export default HeroPost;
