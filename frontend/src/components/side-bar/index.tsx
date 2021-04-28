import React from "react";
import Footer from "./Footer";
import ReadingList from "./ReadingList";
import WhoToFollow from "./WhoToFollow";

function SideBar() {
  return (
    <div className="sticky-top py-5">
      <ReadingList />
      <WhoToFollow />
      <Footer />
    </div>
  );
}

export default SideBar;
