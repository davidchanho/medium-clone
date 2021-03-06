import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Footer from ".";

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Footer />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
