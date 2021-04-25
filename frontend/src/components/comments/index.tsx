import React from "react";
import { FormControl, ListGroup, Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";
import { IconMessage } from "../_shared/icons";

function Comments() {
  const { post } = useSelector(postSelectors);
  return (
    <>
      <ListGroup.Item className="d-flex align-items-center justify-content-between">
        <IconMessage className="mr-3" /> {post.comments.length}
      </ListGroup.Item>

      <Modal>
        <ModalHeader closeButton>Responses</ModalHeader>
        <ModalBody>
          <FormControl />
        </ModalBody>
      </Modal>
    </>
  );
}

export default Comments;
