import React from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

function PostSkeleton() {
  return (
    <div className="w-100 my-2">
      <Row>
        <Col>
          <Skeleton count={5} />
        </Col>
        <Col>
          <Skeleton width={200} height={200} />
        </Col>
      </Row>
    </div>
  );
}

export default PostSkeleton;
