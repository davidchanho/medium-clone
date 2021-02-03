import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { formatDate } from "../../helpers/formatDate";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function Post({ post }: PostProps) {
  const { onDeletePost, onGetPost, publicationName } = usePost(post);

  return (
    <Card className="w-100 my-2 d-flex flex-row align-items-center border-0 ">
      <Card.Header className="bg-white border-0 w-75 d-flex justify-content-between p-0">
        <div className="pointer" onClick={onGetPost}>
          <Card.Text>
            <BsBookmark /> firstname lastname in {publicationName}
          </Card.Text>
          <Card.Title className="text-capitalize">{post.title}</Card.Title>
          <Card.Subtitle className="text-capitalize text-secondary">
            {post.body.substr(0, 50).trim()}...
          </Card.Subtitle>
          <Card.Text className="text-secondary">
            {formatDate(post.date)}
          </Card.Text>
        </div>
        <div className="mt-auto">
          <Dropdown className="d-flex align-items-center justify-content-between">
            <Dropdown.ItemText className='p-0'>
              <BsBookmark />
            </Dropdown.ItemText>

            <Dropdown.Toggle className="border-0 bg-white text-secondary shadow-none">
              <BsThreeDots />
            </Dropdown.Toggle>
            <Dropdown.Menu className="d-flex flex-column">
              <Dropdown.Item onClick={onDeletePost}>
                Dismiss This Post
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Header>
      <Card.Body className="pointer w-25" onClick={onGetPost}>
        <Card.Img className="w-100" src={post.image} />
      </Card.Body>
    </Card>
  );
}

export default Post;
