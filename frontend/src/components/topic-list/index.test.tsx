import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import TopicList from ".";
import { store } from "../../store";

describe("TopicList", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <TopicList />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
