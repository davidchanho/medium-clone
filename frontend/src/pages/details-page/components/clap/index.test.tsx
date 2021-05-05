import React from "react";
import renderer from "react-test-renderer";
import Clap from ".";

describe("Clap", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Clap />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
