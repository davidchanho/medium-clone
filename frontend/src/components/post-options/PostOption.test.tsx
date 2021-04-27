import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../store";
import { testPost } from "../../tests";
import PostOption from "./PostOption";

describe("PostOption", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PostOption {...testPost} label="test" />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
