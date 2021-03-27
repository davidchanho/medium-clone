import React from "react";
import renderer from "react-test-renderer";
import HeroPost from "./HeroPost";

describe("HeroPost", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HeroPost />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
