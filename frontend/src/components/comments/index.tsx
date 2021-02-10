import React from "react";
import { Button, FormControl, Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { BiMessage } from "react-icons/bi";
import { useSelector } from "react-redux";
import { postSelectors } from "../../store/posts/selectors";

function Comments() {
  const { post, loading, error } = useSelector(postSelectors);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!post) {
    return null;
  }

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
