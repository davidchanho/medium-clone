import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostHeader from "./PostHeader";

describe("PostHeader", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PostHeader post={testPost}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
