import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <React.StrictMode>
    <Router>
      <Root store={store} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
