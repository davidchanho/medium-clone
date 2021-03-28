import React from "react";
import renderer from "react-test-renderer";
import DetailsBar from ".";

describe("DetailsBar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DetailsBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
