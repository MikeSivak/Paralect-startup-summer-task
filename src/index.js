import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header.js';
import InitialState from './components/InitialState.js';
import UserNotFound from './components/UserNotFound.js';
import RepoNotFound from './components/RepoNotFound.js';
import MainScreen from './components/MainScreen.js';
import './styles/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      {/* <InitialState /> */}
      {/* <UserNotFound/> */}
      {/* <RepoNotFound/> */}
      <MainScreen/>
    </div>
  </React.StrictMode>,
  document.getElementById('header')
);

// ReactDOM.render(
//   <React.StrictMode>
//       <InitialState />
//   </React.StrictMode>,
//   document.getElementById('main')
// );


reportWebVitals();
