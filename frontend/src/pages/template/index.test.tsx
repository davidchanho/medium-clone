import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Template from ".";
import { store } from "../../store";
import { theme } from "../../styles/theme";

describe("Template", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router>
              <Template />
            </Router>
          </ThemeProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
