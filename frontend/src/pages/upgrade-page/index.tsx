import React from "react";
import { Card, InputGroup, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ReactComponent as MediumLogo } from "../../asset/medium.svg";

function UpgradePage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/" as={NavLink}>
          <MediumLogo />
        </Navbar.Brand>
      </Navbar>
      <h4 className="font-weight-bold">
        Get unlimited access to everything on Medium
      </h4>
      <Card border="success" className="border rounded w-50 my-2">
        <Card.Body>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Radio name="upgrade" id="monthly" />
            </InputGroup.Prepend>
            <div className="ml-2">
              <p className="mb-0">Monthly</p>
              <p className="mb-0">$5/month</p>
            </div>
          </InputGroup>
        </Card.Body>
      </Card>
      <Card border="success" className="border rounded w-50 my-2">
        <Card.Body>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Radio name="upgrade" id="annual" />
            </InputGroup.Prepend>
            <div className="ml-2">
              <p className="mb-0">Annual</p>
              <p className="mb-0">$50/year (save $10)</p>
            </div>
          </InputGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UpgradePage;
