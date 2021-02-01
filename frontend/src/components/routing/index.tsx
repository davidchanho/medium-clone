import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetailsPage from "../../pages/post-details-page";
import PostsPage from "../../pages/posts-page";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/:id" element={<PostDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
