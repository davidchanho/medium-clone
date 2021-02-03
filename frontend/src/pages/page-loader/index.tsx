import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function PageLoader() {
  return (
    <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <ClipLoader loading={true} size={300} />
    </div>
  );
}

export default PageLoader;
