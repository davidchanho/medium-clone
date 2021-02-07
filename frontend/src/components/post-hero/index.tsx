import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { usePostHero } from "./usePostHero";

function PostHero() {
  const { renderHeroPost, renderPosts } = usePostHero();

  return (
    <div className="d-flex justify-content-between">
      <Card>{renderHeroPost()}</Card>
      <CardDeck className="d-flex flex-column">{renderPosts()}</CardDeck>
      <Card>
        <div>
          <p className="text-uppercase font-weight-bold">Creators to follow</p>
          <BiUserCircle />{" "}
          <div>
            <div>name</div>
            <div>name</div>
          </div>{" "}
          <Button variant="success">Follow</Button>
        </div>
        <div>
          <p className="text-uppercase font-weight-bold">Topics you follow</p>
        </div>
      </Card>
    </div>
  );
}

export default PostHero;
