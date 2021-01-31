import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "../../pages/posts-page";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
