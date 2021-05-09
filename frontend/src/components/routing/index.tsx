import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLoader from "../page-loader";
import Template from "../../pages/template";

const PostDetailsPage = lazy(() => import("../../pages/post-details-page"));
const PostFormPage = lazy(() => import("../../pages/post-form-page"));
const PostsPage = lazy(() => import("../../pages/posts-page"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<PostsPage />} />
            <Route path="/create" element={<PostFormPage />} />
            <Route path="/:id" element={<PostDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
