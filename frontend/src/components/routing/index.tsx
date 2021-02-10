import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../../pages/landing-page";
import PostDetailsPage from "../../pages/post-details-page";
import PostFormPage from "../../pages/post-form-page";
import PostsPage from "../../pages/posts-page";
import ReadingListPage from "../../pages/reading-list-page";
import UpgradePage from "../../pages/upgrade-page";
import Template from "../../shared/template";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route element={<Template />}>
          <Route path="/" element={<PostsPage />} />
          <Route path="/create" element={<PostFormPage />} />
          <Route path="/:id" element={<PostDetailsPage />} />
          <Route path="/reading-list" element={<ReadingListPage />} />
        </Route>
        <Route path="/upgrade" element={<UpgradePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
