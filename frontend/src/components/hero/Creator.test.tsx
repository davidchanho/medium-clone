import React from "react";
import renderer from "react-test-renderer";
import { testUser } from "../../tests";
import Creator from "./Creator";

describe("Creator", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Creator user={testUser} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
