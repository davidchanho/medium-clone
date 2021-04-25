import React from "react";
import PricingCard from "../../components/upgrade/PricingCard";

function UpgradePage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <img src="/medium.svg" alt="" />
      <h4 className="font-weight-bold mb-3">
        Get unlimited access to everything on Medium
      </h4>

      <PricingCard freq="Monthly" price="$5/month" />
      <PricingCard freq="Annual" price="$50/year (save $10)" />
    </div>
  );
}

export default UpgradePage;
