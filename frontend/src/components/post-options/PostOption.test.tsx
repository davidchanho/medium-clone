import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostOption from "./PostOption";

describe("PostOption", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PostOption post={testPost} label="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
