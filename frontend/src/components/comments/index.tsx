import React from "react";
import { FormControl, ListGroup, Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { BiMessage } from "react-icons/bi";
import { PostProps } from "../../store/posts/types";

function Comments({ post }: PostProps) {
  return (
    <>
      <ListGroup.Item className="d-flex align-items-center">
        <BiMessage className="mr-3" /> {post.comments.length}
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
