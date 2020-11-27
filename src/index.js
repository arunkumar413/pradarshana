import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import App from "./App";


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
          <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>

  </React.StrictMode>,
  rootElement
);
