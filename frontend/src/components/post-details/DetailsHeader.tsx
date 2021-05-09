import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IPost, PostProps } from "../../types";
import { IconFacebook, IconLinkedin, IconTwitter } from "../icons";
import PostOptions from "../post-options";

function DetailsHeader({ post }: PostProps) {
  return (
    <div className="d-flex align-items-center justify-content-between flex-row mb-3">
      <Row className="d-flex align-items-center flex-row">
        <Col xs={2}>
          <img src={post?.user?.avatar} alt={post?.user?.name} />
        </Col>
        <Col>
          {post?.user?.name} <Button size="sm">Follow</Button>
        </Col>
      </Row>

      <div className="w-25 d-flex align-items-center justify-content-between">
        <IconTwitter size="28" />
        <IconLinkedin size="28" />
        <IconFacebook size="28" />
        <PostOptions post={post} />
      </div>
    </div>
  );
}

export default DetailsHeader;
