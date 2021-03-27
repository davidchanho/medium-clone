import React from "react";
import renderer from "react-test-renderer";
import FeaturedPosts from "./FeaturedPosts";

describe("FeaturedPosts", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FeaturedPosts />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
