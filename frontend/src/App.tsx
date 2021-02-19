import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Routing from "./components/routing";
import { useActions } from "./hooks/useActions";
import { postSelectors, publicationSelectors, userSelectors } from "./store";

function App() {
  const { getPosts, getPublications, getUser, getUsers } = useActions();
  const { posts } = useSelector(postSelectors);
  const { publications } = useSelector(publicationSelectors);
  const { users, user } = useSelector(userSelectors);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
    if (publications.length === 0) {
      getPublications();
    }
    if (users.length === 0) {
      getUsers();
    }
    if (!user._id) {
      getUser("6024670da4cf7653c06c6dd3");
    }
  }, []);

  return <Routing />;
}

export default App;
