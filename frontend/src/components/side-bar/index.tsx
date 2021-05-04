import React from "react";
import Footer from "./Footer";
import ReadingList from "./ReadingList";
import WhoToFollow from "./WhoToFollow";

function SideBar() {
  return (
    <div>
      <ReadingList />
      <div>
        <WhoToFollow />
        <Footer />
      </div>
    </div>
  );
}

export default SideBar;
