import React from "react";
import { FormControl, ListGroup, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { IconMessage } from "../icons";

function Comments() {
  const { post } = useSelector(postSelectors);
  return (
    <>
      <ListGroup.Item className="d-flex align-items-center justify-content-between">
        <IconMessage className="mr-3" /> {post?.comments?.length}
      </ListGroup.Item>

      <Modal>
        <Modal.Header closeButton>Responses</Modal.Header>
        <Modal.Body>
          <FormControl />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Comments;
