import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { postSelectors } from "../../store";
import Post from "../post";

function HeroPost() {
  const { hero } = useSelector(postSelectors);

  const renderHero = () => {
    return (
      <>
        <NavLink to={`/${hero._id}`} className="text-secondary">
          <Post {...hero} excerpt={280} />
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
