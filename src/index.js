import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js';
import InitialState from './components/InitialState.js';
import './styles/fonts.css'

ReactDOM.render(
  <React.StrictMode>
      <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
      <InitialState />
  </React.StrictMode>,
  document.getElementById('main')
);


reportWebVitals();
