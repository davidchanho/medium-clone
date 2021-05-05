import React, { useState } from "react";
import MediumLogo from "../../components/medium-logo";
import PlansBenefits from "./components/plans-benefits";
import PlansContainer from "./components/plans-container";
import PlansForm from "./components/plans-form";
import PlansFrequency from "./components/plans-frequency";
import PlansOption from "./components/plans-option";
import PlansSubtitle from "./components/plans-subtitle";
import PlansTitle from "./components/plans-title";

function PlansPage() {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("");

  const handleOpen = (amount: string) => {
    setOpen(true);
    setOption(amount);
  };

  const handleClose = () => setOpen(false);

  return (
    <PlansContainer>
      <MediumLogo width="148" height="21" />
      <PlansTitle>Get unlimited access to everything on Medium</PlansTitle>
      <PlansSubtitle>
        Plans starting at less than $1/week. Cancel anytime.
      </PlansSubtitle>
      <PlansBenefits />
      <PlansOption onClick={() => handleOpen("5")}>
        <PlansFrequency>Monthly</PlansFrequency>
        <p>$5/month</p>
      </PlansOption>
      <PlansOption onClick={() => handleOpen("50")}>
        <PlansFrequency>Annual</PlansFrequency>
        <p>$50/year (save $10)</p>
      </PlansOption>
      {open && <PlansForm option={option} handleClose={handleClose} />}
    </PlansContainer>
  );
}

export default PlansPage;
