import React from "react";
import renderer from "react-test-renderer";
import Comment from ".";
import { testPost } from "../../tests";

describe("Comment", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Comment post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
