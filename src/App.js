import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Winner from './components/Winner'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JokePage from './components/JokePage';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route component = {Home} exact path='/' />
        <Route component = {JokePage} path ='/jokepage' />
        <Route component ={Winner} path='/winner' />
      </Switch>
    </Router>

    </Provider>
  );
}

export default App;
