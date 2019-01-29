import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './App.css';

// Containers
import Main from './components/basic/main';
// Pages

// import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="Home" component={Main} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
