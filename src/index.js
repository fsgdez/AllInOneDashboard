import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import Root from 'components/Root';
import reducer from 'reducers/index'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
