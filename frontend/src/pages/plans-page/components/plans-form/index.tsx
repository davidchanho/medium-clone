import React from "react";
import { FaCcDiscover, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { IconClose } from "../../../../components/icons";
import Modal from "../../../../components/modal";
import Row from "../../../../components/row";
import styles from "./index.module.scss";

interface Props {
  option: string;
  handleClose: () => void;
}

function PlansForm({ option, handleClose }: Props) {
  return (
    <Modal>
      <Row>
        <h1>Payment Method</h1> <IconClose onClick={handleClose} />
      </Row>
      <Row>
        <p>Total billed today</p>
        <p>{`$${option} USD`}</p>
      </Row>
      <section className={styles.section}>
        <div>
          <h3>Pay with</h3> <FaCcVisa /> <FaCcDiscover /> <FaCcMastercard />
          <div>
            <button>Paypal</button>
            <button>
              <FcGoogle /> Pay
            </button>
          </div>
        </div>
        <hr />
        <form>
          <div>
            <label>Card number</label>
            <input placeholder="5555 4444 4444 4444" />
          </div>
          <div>
            <div>
              <label>Expiration</label>
              <input placeholder="MM/YY" />
            </div>
            <div>
              <label>Security code</label>
              <input placeholder="123" />
            </div>
          </div>
        </form>
        <p>
          By starting a Medium membership, you agree to our{" "}
          <NavLink to="/">Membership Terms of Service.</NavLink> Your payment
          method will be charged a recurring USD $50 yearly fee, unless you
          decide to cancel. No refunds for memberships canceled between billing
          cycles.
        </p>
        <button>Pay with credit or debit card</button>
      </section>
    </Modal>
  );
}

export default PlansForm;
