import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../store";
import { testPublication } from "../../tests";
import PublicationItem from "./PublicationItem";

describe("PublicationItem", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PublicationItem {...testPublication} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
