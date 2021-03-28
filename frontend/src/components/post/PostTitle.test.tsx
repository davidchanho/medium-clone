import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostTitle from "./PostTitle";

describe("PostTitle", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostTitle post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
