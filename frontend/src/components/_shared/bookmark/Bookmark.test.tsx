import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Bookmark from ".";
import { store } from "../../../store";

describe("Bookmark", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Bookmark />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
