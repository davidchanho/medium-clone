import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";

function FeaturedUsers() {
  return (
    <>
      <div>
        <p className="text-uppercase font-weight-bold">Creators to follow</p>{" "}
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center justity-content-between">
            <div>
              <BiUserCircle size={48} />
            </div>
            <div>
              <p className="font-weight-bold text-capitalize">name</p>
              <div>sdfgdsfgdsfg sdfgdsfg dsfgdfgdsfgdsfg</div>
            </div>
            <Button variant="success">Follow</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <BiUserCircle />
            name
            <Button variant="success">Follow</Button>
          </ListGroup.Item>
        </ListGroup>{" "}
      </div>
      <div>
        <p className="text-uppercase font-weight-bold">Topics you follow</p>
      </div>
    </>
  );
}

export default FeaturedUsers;
