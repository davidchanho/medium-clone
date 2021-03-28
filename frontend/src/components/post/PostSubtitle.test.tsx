import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostSubtitle from "./PostSubtitle";

describe("PostSubtitle", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostSubtitle post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
