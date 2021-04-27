import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../store";
import UserNavMenu from "./UserNavMenu";

describe("UserNavMenu", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <UserNavMenu />{" "}
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
