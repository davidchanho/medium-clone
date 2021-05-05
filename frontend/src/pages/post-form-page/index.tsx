import React from "react";
import { Helmet } from "react-helmet";
import PostForm from "./components/post-form";

function PostFormPage() {
  return (
    <>
      <Helmet>
        <title>New Story - Medium</title>
        <meta name="description" content="New Story - Medium" />
      </Helmet>
      <PostForm />
    </>
  );
}

export default PostFormPage;
