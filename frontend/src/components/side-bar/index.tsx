import React from "react";
import Footer from "./Footer";
import ReadingList from "./ReadingList";
import WhoToFollow from "./WhoToFollow";

function SideBar() {
  return (
    <>
      <ReadingList />
      <div className="sticky-top">
        <WhoToFollow />
        <Footer />
      </div>
    </>
  );
}

export default SideBar;
