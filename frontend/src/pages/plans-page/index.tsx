import React, { useState } from "react";
import MediumLogo from "../../components/medium-logo";
import PlansBenefits from "./components/plans-benefits";
import PlansForm from "./components/plans-form";
import styles from "./index.module.scss";
function PlansPage() {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("");

  const handleOpen = (amount: string) => {
    setOpen(true);
    setOption(amount);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className={styles.container}>
      <MediumLogo width="148" height="21" />
      <h1 className={styles.title}>
        Get unlimited access to everything on Medium
      </h1>
      <h2 className={styles.subtitle}>
        Plans starting at less than $1/week. Cancel anytime.
      </h2>
      <PlansBenefits />
      <div className={styles.option} onClick={() => handleOpen("5")}>
        <h3 className={styles.frequency}>Monthly</h3>
        <p>$5/month</p>
      </div>
      <div className={styles.option} onClick={() => handleOpen("50")}>
        <h3 className={styles.frequency}>Annual</h3>
        <p>$50/year (save $10)</p>
      </div>
      {open && <PlansForm option={option} handleClose={handleClose} />}
    </div>
  );
}

export default PlansPage;
