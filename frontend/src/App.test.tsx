import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import App from "./App";
import { store } from "./store/store";

test("renders learn react link", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
