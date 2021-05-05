import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCcDiscover, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  option: string;
  handleClose: () => void;
}

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;
`;

const Section = styled.section`
  border: 1px solid ${(props) => props.theme.colors.upgradePrimary};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function PlansForm({ option, handleClose }: Props) {
  return (
    <Modal>
      <Row>
        <h1>Payment Method</h1> <AiOutlineClose onClick={handleClose} />
      </Row>
      <Row>
        <p>Total billed today</p>
        <p>{`$${option} USD`}</p>
      </Row>
      <Section>
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
      </Section>
    </Modal>
  );
}

export default PlansForm;
