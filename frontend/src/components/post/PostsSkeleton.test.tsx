import React from "react";
import renderer from "react-test-renderer";
import PostsSkeleton from "./PostsSkeleton";

describe("PostsSkeleton", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostsSkeleton amount={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
