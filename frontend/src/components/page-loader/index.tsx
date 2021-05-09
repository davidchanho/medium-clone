import React from "react";
import { ReactComponent as MobileMediumLogo } from "../../assets/mediumMobile.svg";

function PageLoader() {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <MobileMediumLogo width="146" height='46' />
    </div>
  );
}

export default PageLoader;
