import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import registerServiceWorker from './registerServiceWorker';

// middlewares
import thunk from 'redux-thunk';

// reducers
import reducer from 'reducers/index';

// components
import Root from 'components/Root';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'styles/theme';

// store
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Root store={store}>
      <CssBaseline />
    </Root>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
