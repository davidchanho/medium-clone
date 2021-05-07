import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { postSelectors } from "../../store";
import Post from "../post";
import PostImg from "../post-img";

function HeroPost() {
  const { hero } = useSelector(postSelectors);

  return (
    <div>
      <NavLink to={`/${hero?._id}`}>
        <PostImg {...hero} width={375} height={281.5} />
        <Post {...hero} excerpt={120} />
      </NavLink>
      <div>
        <NavLink to={`/${hero?._id}`}>Read More</NavLink> &middot;{" "}
        {hero?.readingTime}
      </div>
    </div>
  );
}

export default HeroPost;
