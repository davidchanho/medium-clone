import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../store";
import HeroPost from "./HeroPost";

describe("HeroPost", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HeroPost />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
