import React from "react";
import Routing from "./components/routing";
import { useFetchPosts } from "./hooks/useFetchPosts";

function App() {
  useFetchPosts()
  return <Routing />;
}

export default App;
