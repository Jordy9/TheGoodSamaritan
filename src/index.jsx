import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GoodSamaritan } from './GoodSamaritan';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { UseRedirectToHttps } from './hooks/UseRedirectToHttps';

UseRedirectToHttps()

ReactDOM.render(
  <React.StrictMode>
    <GoodSamaritan />
  </React.StrictMode>,
  document.getElementById('root')
);