import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { updatePost } from "../../store/actionCreators";
import { IconClap } from "../icons";

function Clap() {
  const { post } = useSelector(postSelectors);

  const incrementClap = () => {
    updatePost({ ...post, claps: post.claps + 1 });
  };

  return (
    <ListGroup.Item className="d-flex align-items-center border-0">
      <IconClap onClick={incrementClap} className="mr-3" />
      <p>{post?.claps}</p>
    </ListGroup.Item>
  );
}

export default Clap;
