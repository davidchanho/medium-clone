import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import PostDate from "./PostDate";

describe("PostDate", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PostDate {...testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
