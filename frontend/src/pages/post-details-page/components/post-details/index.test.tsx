import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import PostDetails from ".";
import { store } from "../../../../store";

describe("PostDetails", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PostDetails />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
