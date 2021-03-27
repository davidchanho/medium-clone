import React from "react";
import renderer from "react-test-renderer";
import Post from ".";
import { testPost } from "../../tests";

describe("Post", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Post post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
