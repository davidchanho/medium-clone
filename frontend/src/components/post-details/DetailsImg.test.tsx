import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import DetailsImg from "./DetailsImg";

describe("DetailsImg", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DetailsImg post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
