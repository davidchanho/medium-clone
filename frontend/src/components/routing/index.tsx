import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetailsPage from "../../pages/post-details-page";
import PostFormPage from "../../pages/post-form-page";
import PostsPage from "../../pages/posts-page";
import ReadingListPage from "../../pages/reading-list-page";
import Template from "../../pages/template";
import UpgradePage from "../../pages/upgrade-page";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<PostsPage />} />
          <Route path="/create" element={<PostFormPage />} />
          <Route path="/:id" element={<PostDetailsPage />} />
          <Route path="/reading-list" element={<ReadingListPage />} />
        </Route>
        <Route path="/upgrade" element={<UpgradePage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
