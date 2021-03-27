import React from "react";
import renderer from "react-test-renderer";
import TopicsYouFollow from "./TopicsYouFollow";

describe("TopicsYouFollow", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TopicsYouFollow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
