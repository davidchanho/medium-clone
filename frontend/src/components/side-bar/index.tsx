import React from "react";
import FollowCreators from "./FollowCreators";
import Footer from "./Footer";
import ReadingList from "./ReadingList";

function SideBar() {
  return (
    <div className="sticky-top py-5">
      <ReadingList />
      <FollowCreators />
      <Footer />
    </div>
  );
}

export default SideBar;
