import React from "react";
import renderer from "react-test-renderer";
import UserNavMenu from "./UserNavMenu";

describe("UserNavMenu", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<UserNavMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
