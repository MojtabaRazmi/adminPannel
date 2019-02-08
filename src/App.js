import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import './App.css';

// Containers
import Main from './components/basic/main';
// Pages

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" name="Home" component={Main} />
      </Switch>
    );
  }
}

export default App;
