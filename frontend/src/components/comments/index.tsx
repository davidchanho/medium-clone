import React from "react";
import { Button, FormControl, Modal, ModalBody, ModalTitle } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { BiMessage } from "react-icons/bi";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store";

function Comments() {
  const { post } = useSelector(postSelectors);

  return (
    <>
      <Button>
        <BiMessage /> {post.comments.length}
      </Button>

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
