import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppUgly from './useState/AppUgly';
import Inputs from './useState/Inputs';
import Tabs from './useState/Tabs';
import App from './useEffect/App';
import Titles from './useEffect/Titles';
import Ref from './useEffect/Click';
import Confirm from './useEffect/Confirms';
import PreventLeave from './useEffect/PreventLeave';
import BeforeLeave from './useEffect/BeforeLeave';
import AxiosEx from "./axios/AxiosEx";

ReactDOM.render(
  <React.StrictMode>
    <AxiosEx />
  </React.StrictMode>,
  document.getElementById('root')
);