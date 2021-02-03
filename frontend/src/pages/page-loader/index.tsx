import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function PageLoader() {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <ClipLoader loading={true} size={150} />
    </div>
  );
}

export default PageLoader;
