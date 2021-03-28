import React from "react";
import renderer from "react-test-renderer";
import PostSkeleton from "./PostSkeleton";

describe("PostSkeleton", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostSkeleton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
