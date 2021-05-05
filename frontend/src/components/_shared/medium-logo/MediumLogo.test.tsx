import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import MediumLogo from ".";
import { store } from "../../../store";

describe("MediumLogo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MediumLogo />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
