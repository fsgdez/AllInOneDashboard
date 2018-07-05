import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index'

const store = createStore(reducer);
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
