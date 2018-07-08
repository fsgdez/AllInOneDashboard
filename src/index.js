import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/index.css';
import Root from 'components/Root';
import reducer from 'reducers/index';
import registerServiceWorker from './registerServiceWorker';

// components
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'styles/theme';

const store = createStore(reducer);
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root store={store}>
      <CssBaseline />
    </Root>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
