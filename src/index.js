import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider, responsiveFontSizes  } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#173DE2",
    },
    secondary: {
      main: "#151718",
    },
    overrides: {
      MuiButton: {
        root: {
          color: "#0FF",
        },
      },
    }
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
