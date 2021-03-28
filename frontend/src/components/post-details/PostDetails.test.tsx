import React from "react";
import renderer from "react-test-renderer";
import PostDetails from ".";

describe("PostDetails", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
