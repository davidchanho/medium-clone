import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import renderer from "react-test-renderer";
import Post from ".";
import { testPost } from "../../tests";

describe("Post", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Post {...testPost} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
