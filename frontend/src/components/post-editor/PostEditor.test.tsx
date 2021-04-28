import React from "react";
import renderer from "react-test-renderer";
import PostEditor from ".";

describe("PostEditor", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostEditor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
