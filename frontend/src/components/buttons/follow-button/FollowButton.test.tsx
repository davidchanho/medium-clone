import React from "react";
import renderer from "react-test-renderer";
import FollowButton from ".";

describe("FollowButton", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FollowButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
