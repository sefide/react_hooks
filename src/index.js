import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppUgly from './useState/AppUgly';
import Inputs from './useState/Inputs';
import Tabs from './useState/Tabs';

ReactDOM.render(
  <React.StrictMode>
    <AppUgly />
  </React.StrictMode>,
  document.getElementById('root')
);