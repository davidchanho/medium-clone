import React from "react";
import renderer from "react-test-renderer";
import { testPost } from "../../tests";
import DetailsHeader from "./DetailsHeader";

describe("DetailsHeader", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DetailsHeader post={testPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
