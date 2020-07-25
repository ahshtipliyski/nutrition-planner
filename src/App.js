import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from '../src/Components/Main/Main';
import LandingPage from '../src/Components/LandingPage/LandingPage';

function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/nutritiontable'>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;