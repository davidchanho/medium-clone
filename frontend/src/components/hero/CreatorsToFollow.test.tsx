import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../store";
import CreatorsToFollow from "./CreatorsToFollow";

describe("CreatorsToFollow", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CreatorsToFollow />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
