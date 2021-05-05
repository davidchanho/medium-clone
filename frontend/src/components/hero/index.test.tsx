import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Hero from ".";
import { store } from "../../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("Hero", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Hero />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
