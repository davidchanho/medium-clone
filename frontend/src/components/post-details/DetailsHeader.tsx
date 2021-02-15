import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import PostOptions from "../../shared/post-options";
import PostDate from "../../shared/post/PostDate";
import { PostProps } from "../../store/posts/types";

function DetailsHeader({ post }: PostProps) {
  return (
    <div className="d-flex align-items-center justify-content-between flex-row mb-3">
      <Row className="d-flex align-items-center flex-row">
        <Col xs={2}>
          <BiUserCircle size={44} />
        </Col>
        <Col>
          name <Button size="sm">Follow</Button>
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