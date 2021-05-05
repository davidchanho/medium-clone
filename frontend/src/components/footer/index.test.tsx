import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from ".";
import { theme } from "../../styles/theme";

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Router>
            <Footer />
          </Router>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
