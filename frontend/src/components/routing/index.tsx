import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "../template";

const DetailsPage = lazy(() => import("../../pages/details-page"));
const NewStoryPage = lazy(() => import("../../pages/new-story-page"));
const PostsPage = lazy(() => import("../../pages/posts-page"));
const NotFoundPage = lazy(() => import("../../pages/not-found-page"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<PostsPage />} />
            <Route path="/new-story" element={<NewStoryPage />} />

            <Route path="/post">
              <Route path="/:id" element={<DetailsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
