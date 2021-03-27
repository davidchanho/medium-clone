import React from "react";
import renderer from "react-test-renderer";
import PostContainer from "./PostContainer";

const onClick = () => {};

describe("PostContainer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PostContainer onClick={onClick}> test</PostContainer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
