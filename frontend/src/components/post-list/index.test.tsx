import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import PostList from ".";
import { store } from "../../store";

describe("PostList", () => {
  
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <PostList />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
