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
import FadeIn from './useEffect/FadeIn';
import Network from './useEffect/Network';
import Scroll from './useEffect/Scroll';
import FullScreen from './useEffect/FullScreen';
import Notification from './useEffect/Notification';
import AxiosEx from "./axios/AxiosEx";

ReactDOM.render(
  <React.StrictMode>
    <Notification />
  </React.StrictMode>,
  document.getElementById('root')
);