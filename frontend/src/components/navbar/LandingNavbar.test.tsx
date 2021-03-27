import React from "react";
import renderer from "react-test-renderer";
import LandingNavbar from "./LandingNavbar";

describe("LandingNavbar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LandingNavbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
