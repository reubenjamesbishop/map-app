import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';

import SideBar from './components/Sidebar';

export default function App() {
  return (
    <div id="App">
      <Router>
        <SideBar />
        <div id="page-wrap">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

// export default App;
