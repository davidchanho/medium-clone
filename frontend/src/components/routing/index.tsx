import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetailsPage from "../../pages/post-details-page";
import PostFormPage from "../../pages/post-form-page";
import PostsPage from "../../pages/posts-page";
import Template from "../../shared/template";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<PostsPage />} />
          <Route path="/create" element={<PostFormPage />} />
          <Route path="/:id" element={<PostDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
