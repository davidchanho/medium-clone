import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { PostProps } from "../../store/posts/types";
import PostOptions from "../post-options";
import PostDate from "../post/PostDate";

function DetailsHeader({ post }: PostProps) {
  return (
    <div className="d-flex align-items-center justify-content-between flex-row mb-3">
      <Row className="d-flex align-items-center flex-row">
        <Col xs={2}>
          <img src={post?.user?.avatar} />
        </Col>
        <Col>
          {post?.user?.name} <Button size="sm">Follow</Button>
          <PostDate post={post} />
        </Col>
      </Row>

      <div className="d-flex align-items-center">
        <FaTwitter size="28" />
        <AiFillLinkedin size="28" /> <AiFillFacebook size="28" />
        <PostOptions post={post} />
      </div>
    </div>
  );
}

export default DetailsHeader;
