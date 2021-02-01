import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "../../pages/post-page";
import PostsPage from "../../pages/posts-page";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
