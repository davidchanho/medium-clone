import React from "react";
import renderer from "react-test-renderer";
import Bookmark from ".";
import { testPost } from "../../tests";

describe("Bookmark", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Bookmark post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
