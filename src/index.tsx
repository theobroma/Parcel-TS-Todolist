import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainAppContainer from './containers/MainAppContainer';
import configureStore from './configureStore';
// All styles
import './assets/scss/index.scss';

const rootEl = document.getElementById('root');

const store = configureStore();

render(
  <React.StrictMode>
    <Provider store={store}>
      <MainAppContainer />
    </Provider>
  </React.StrictMode>,
  rootEl,
);
