import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import SideBar from './components/Sidebar';

import Home from './components/pages/Home';
import ChargeCodes from './components/pages/ChargeCodes';
import Counter from './components/pages/Counter';

export default function App() {
  return (
    <div id="App">
      <Router>
        <SideBar />
        <div id="page-wrap">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ChargeCodes" exact component={ChargeCodes} />
            <Route path="/Counter" exact component={Counter} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
