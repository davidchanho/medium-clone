import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "../template";

const SettingsPage = lazy(() => import("../../pages/settings-page"));
const ReadingHistoryPage = lazy(
  () => import("../../pages/reading-history-page")
);
const MutePage = lazy(() => import("../../pages/mute-page"));
const MissionControlPage = lazy(
  () => import("../../pages/mission-control-page")
);
const PublicationsPage = lazy(() => import("../../pages/publications-page"));
const StatsPage = lazy(() => import("../../pages/stats-page"));
const DetailsPage = lazy(() => import("../../pages/details-page"));
const NewStoryPage = lazy(() => import("../../pages/new-story-page"));
const PostsPage = lazy(() => import("../../pages/posts-page"));
const ReadingListPage = lazy(() => import("../../pages/reading-list-page"));
const PlansPage = lazy(() => import("../../pages/plans-page"));
const StoriesPage = lazy(() => import("../../pages/stories-page"));
const NotFoundPage = lazy(() => import("../../pages/not-found-page"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/" element={<PostsPage />} />
            <Route path="/new-story" element={<NewStoryPage />} />
            <Route path="/:id" element={<DetailsPage />} />
            <Route path="/plans" element={<PlansPage />} />
          </Route>

          <Route path="/me">
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/missioncontrol" element={<MissionControlPage />} />
            <Route path="/readinghistory" element={<ReadingHistoryPage />} />

            <Route path="/list" element={<ReadingListPage />}>
              <Route path="/queue" element={<ReadingListPage />} />
              <Route path="/archive" element={<ReadingListPage />} />
              <Route path="/highlights" element={<ReadingListPage />} />
              <Route path="/recent" element={<ReadingListPage />} />
            </Route>

            <Route path="/stories" element={<StoriesPage />}>
              <Route path="/drafts" element={<StoriesPage />} />
              <Route path="/public" element={<StoriesPage />} />
              <Route path="/responses" element={<StoriesPage />} />
            </Route>

            <Route path="/settings">
              <Route path="/" element={<SettingsPage />} />
              <Route path="/mute" element={<MutePage />} />
            </Route>
          </Route>

          <Route element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
