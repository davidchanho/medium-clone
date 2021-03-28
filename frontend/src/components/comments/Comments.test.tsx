import React from "react";
import renderer from "react-test-renderer";
import Comments from ".";
import { testPost } from "../../tests";

describe("Comments", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Comments post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
