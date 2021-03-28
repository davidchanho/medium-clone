import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostImg from "./PostImg";

describe("PostImg", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PostImg post={testPost}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
