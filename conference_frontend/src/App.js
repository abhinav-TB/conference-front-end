import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
// ====================
import Profile from './components/Dashboard/Profile'
import Help from './components/Dashboard/Help'
import Home from './Pages/home'
import Commities from './Pages/commities'
// ====================


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/" component={Home} />
          <Route exact path ='/commities' component={Commities}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
