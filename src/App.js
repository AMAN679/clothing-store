import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';

import './App.css';
import HomePage from './pages/homepage.component';

const Hats = () => (

  <h1>HATS PAGE</h1>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>

    </div>
  );
}

export default App;
