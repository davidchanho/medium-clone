import React from "react";
import Footer from "./Footer";
import ReadingList from "./ReadingList";
import WhoToFollow from "./WhoToFollow";

function SideBar() {
  return (
    <div className="py-5 mx-5">
      <ReadingList />
      <div className="sticky-top">
        <WhoToFollow />
        <Footer />
      </div>
    </div>
  );
}

export default SideBar;
