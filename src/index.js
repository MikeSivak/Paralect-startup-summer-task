import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import MainScreen from './components/MainScreen'
import Header from './components/Header'
import InitialState from './components/InitialState'
import './styles/fonts.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RepoNotFound from './components/RepoNotFound';
import UserNotFound from './components/UserNotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header />
        <Route exact path='/'>
          <InitialState />
        </Route>
        <Route exact path='/MainScreen/:username' render={(props)=><MainScreen {...props}/>}>
          {/* <MainScreen /> */}
        </Route>
        <Route exact path='/RepoNotFound'>
          <RepoNotFound />
        </Route>
        <Route exact path='/UserNotFound'>
          <UserNotFound />
        </Route>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
