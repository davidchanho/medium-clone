import React from "react";
import FollowCreators from "./FollowCreators";
import Footer from "./Footer";
import ReadingList from "./ReadingList";

function SideBar() {
  return (
    <div className="w-100">
      <ReadingList />
      <FollowCreators />
      <Footer />
    </div>
  );
}

export default SideBar;
