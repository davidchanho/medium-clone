import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import PostForm from ".";
import { store } from "../../store";

describe("PostForm", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PostForm />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
