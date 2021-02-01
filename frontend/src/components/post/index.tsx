import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { PostProps } from "../../types";
import { usePost } from "./usePost";

function Post({ post }: PostProps) {
  const { onDeletePost, onFetchPost } = usePost(post);

  return (
    <Card className="w-75 my-2 d-flex flex-row border-0">
      <Card.Header className="bg-white border-0 w-75">
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle>{post.body}</Card.Subtitle>
        <div className="d-flex align-items-center justify-content-between">
          <Card.Text>
            {new Date().toDateString()} 3 min read Base on your reading history
            *
          </Card.Text>

          <Dropdown className="d-flex align-items-center justify-content-between">
            <Dropdown.Item>
              <BsBookmark />
            </Dropdown.Item>

            <Dropdown.Toggle>
              <BsThreeDots />
            </Dropdown.Toggle>
            <Dropdown.Menu className="d-flex flex-column">
              <Dropdown.Item variant="danger" onClick={onDeletePost}>
                Delete
              </Dropdown.Item>
              <Dropdown.Item variant="info">Update</Dropdown.Item>
              <Dropdown.Item variant="success" onClick={onFetchPost}>
                Details
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Img
          className="w-75"
          src="https://miro.medium.com/fit/c/272/181/1*ts3kXw7MPHS_yrejwIbZHA.png"
        />
      </Card.Body>
    </Card>
  );
}

export default Post;
