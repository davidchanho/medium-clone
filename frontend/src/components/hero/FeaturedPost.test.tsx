import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import FeaturedPost from "./FeaturedPost";

describe("FeaturedPost", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FeaturedPost post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
