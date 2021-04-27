import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostSubtitle from "./PostSubtitle";

describe("PostSubtitle", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostSubtitle {...testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
