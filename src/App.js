import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import ChargeCodes from './components/pages/ChargeCodes';

import SideBar from './components/Sidebar';

export default function App() {
  return (
    <div id="App">
      <Router>
        <SideBar />
        <div id="page-wrap">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ChargeCodes" exact component={ChargeCodes} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// export default App;
