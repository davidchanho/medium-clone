import React from "react";
import { Button, Card, Dropdown, ListGroup } from "react-bootstrap";
import { useSelector } from "../../hooks/useSelector";
import { postSelectors } from "../../store";
import Bookmark from "../bookmark";
import FollowButton from "../buttons/follow-button";
import Clap from "../clap";
import Comments from "../comments";

function DetailsBar() {
  const { post } = useSelector(postSelectors);

  return (
    <Card className="w-25">
      <Card.Header className="bg-white mb-3">
        <p className="mb-3">{post?.publication?.name}</p>
        <FollowButton user={post.user}/>
      </Card.Header>{" "}
      <Dropdown.Divider />
      <Card.Body as={ListGroup} horizontal>
        <Clap />
        <Comments />
        <Bookmark />
      </Card.Body>
    </Card>
  );
}

export default DetailsBar;
