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
  const { hero } = useSelector(postSelectors);

  const renderHero = () => {
    return (
      <>
        <NavLink to={`/${hero._id}`} className="text-secondary">
          <PostImg {...hero} className="mb-2 h-100 w-100" />
          <PostHeader {...hero} />
          <PostTitle {...hero} />
          <PostSubtitle {...hero} />
        </NavLink>
        <div className="text-secondary d-flex">
          <NavLink to={`/${hero._id}`}>Read More</NavLink> &middot;{" "}
          {hero.readingTime}
        </div>
      </>
    );
  };

  return <Card>{renderHero()}</Card>;
}

export default HeroPost;
