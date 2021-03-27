import React from "react";
import renderer from "react-test-renderer";
import CreatorsToFollow from "./CreatorsToFollow";

describe("CreatorsToFollow", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CreatorsToFollow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
