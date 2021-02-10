import React from "react";
import { FormControl, Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { BiMessage } from "react-icons/bi";
import { PostProps } from "../../store/posts/types";

function Comments({ post }: PostProps) {
  return (
    <>
      <>
        <BiMessage /> {post.comments.length}
      </>

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
