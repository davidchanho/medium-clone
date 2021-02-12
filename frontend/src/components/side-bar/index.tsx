import React from "react";
import Footer from "./Footer";
import ReadingList from "./ReadingList";

function SideBar() {
  return (
    <div className="sticky-top py-5">
      <ReadingList />
      <Footer />
    </div>
  );
}

export default SideBar;
