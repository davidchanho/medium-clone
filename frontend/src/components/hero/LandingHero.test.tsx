import React from "react";
import renderer from "react-test-renderer";
import LandingHero from "./LandingHero";

describe("LandingHero", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LandingHero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
