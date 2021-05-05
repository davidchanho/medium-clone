import React from "react";
import { Helmet } from "react-helmet";

function PostsHead() {
  return (
    <Helmet>
      <title>React Medium</title>
      <meta name="description" content="React Medium" />
      <link rel="icon" type="image/svg+xml" href="/mediumMobile.svg" />
    </Helmet>
  );
}

export default PostsHead;
