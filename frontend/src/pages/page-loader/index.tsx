import React from "react";
import { ReactComponent as MobileMediumLogo } from "../../assets/mediumMobile.svg";

function PageLoader() {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <MobileMediumLogo className="w-25 h-25" />
    </div>
  );
}

export default PageLoader;
