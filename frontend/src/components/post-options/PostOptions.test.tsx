import React from "react";
import renderer from "react-test-renderer";
import PostOptions from ".";
import { testPost } from "../../tests";

describe("PostOptions", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostOptions post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
