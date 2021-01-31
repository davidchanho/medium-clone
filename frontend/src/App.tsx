import React, { useEffect } from "react";
import "./App.scss";
import PostForm from "./components/post-form";
import { useActions } from "./hooks/useActions";

function App() {
  const { fetchPosts } = useActions();
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      <PostForm />
    </div>
  );
}

export default App;
