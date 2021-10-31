import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CryptoMoney } from './CryptoMoney';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <CryptoMoney />
  </React.StrictMode>,
  document.getElementById('root')
);