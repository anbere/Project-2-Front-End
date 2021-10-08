import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
import Welcome from './components/Welcome';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path="" exact component={RegistrationForm}/>
            <Route path="./welcome" exact component={Welcome}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
