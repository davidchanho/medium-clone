import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostListItem from "./PostListItem";

describe("PostListItem", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostListItem {...testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
