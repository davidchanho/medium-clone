import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../store";
import FeaturedPosts from "./FeaturedPosts";

describe("FeaturedPosts", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <FeaturedPosts />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
