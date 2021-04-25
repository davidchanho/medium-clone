import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import Routing from "./components/routing";
import { useActions } from "./hooks/useActions";
import { userSelectors } from "./store";

function App() {
  const { getPosts, getPublications, getUser, getUsers } = useActions();
  const { user } = useSelector(userSelectors);

  useEffect(() => {
    getPosts();
    getPublications();
    getUsers();
    if (!user?._id) {
      getUser("6024670da4cf7653c06c6dd3");
    }
  }, []);

  return <Routing />;
}

export default App;
