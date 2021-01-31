import React, { useEffect } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import "./App.scss";
import PostForm from "./components/post-form";
import { useActions } from "./hooks/useActions";
import { useSelector } from "./hooks/useSelector";

function App() {
  const { fetchPosts, deletePost } = useActions();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
    if (error) {
      return <h2>Bummer something went wrong...</h2>;
    }
    return posts.map((post) => {
      return (
        <Card className="w-25">
          <Card.Header>
            <Card.Title>{post.title}</Card.Title>
            <Button variant="danger" onClick={() => deletePost(post._id)}>
              Delete
            </Button>
            <Button variant="info">Update</Button>
            <Button variant="success">Details</Button>
          </Card.Header>
        </Card>
      );
    });
  };

  return (
    <div>
      <CardDeck>{renderPosts()}</CardDeck>
      <PostForm />
    </div>
  );
}

export default App;
