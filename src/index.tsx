import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
// All styles
import './assets/scss/index.scss';

const rootEl = document.getElementById('root');
render(<App />, rootEl);
