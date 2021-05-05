import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "../../pages/template";
const DetailsPage = lazy(() => import("../../pages/details-page"));
const CreatePage = lazy(() => import("../../pages/create-page"));
const PostsPage = lazy(() => import("../../pages/posts-page"));
const ReadingListPage = lazy(() => import("../../pages/reading-list-page"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<PostsPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/reading-list" element={<ReadingListPage />} />
            <Route path="/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
