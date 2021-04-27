import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IPost } from "../../types";
import PostOptions from "../post-options";
import PostDate from "../post/PostDate";
import { IconFacebook, IconLinkedin, IconTwitter } from "../_shared/icons";

function DetailsHeader({ ...post }: IPost) {
  return (
    <div className="d-flex align-items-center justify-content-between flex-row mb-3">
      <Row className="d-flex align-items-center flex-row">
        <Col xs={2}>
          <img src={post?.user?.avatar} alt={post?.user?.name} />
        </Col>
        <Col>
          {post?.user?.name} <Button size="sm">Follow</Button>
          <PostDate {...post} />
        </Col>
      </Row>

      <div className="d-flex align-items-center">
        <IconTwitter size="28" />
        <IconLinkedin size="28" /> <IconFacebook size="28" />
        <PostOptions {...post} />
      </div>
    </div>
  );
}

export default DetailsHeader;
