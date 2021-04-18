import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter} from "react-router-dom";
import RouteMain from './RouteMain';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><RouteMain /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

