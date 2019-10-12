import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Callback from './components/Callback';
import Auth from './Auth';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Recipe from './components/Recipe';

const auth = new Auth()

class App extends Component{

  render(){
    return(
    <div className="App">
    <Header />
    <Router>
    <Switch>
      <Route exact path="/">
          <Main message="Welcome to RecipeMart.com" showbutton="true" auth={auth}/>
      </Route>
      <Route exact path="/about">
        <Main message="Thank you for visiting us" showbutton="false"/>
      </Route>
      <Route exact path="/callback">
        <Callback />
      </Route>
      <Route exact path="/notfound">
        <Main message="404 Page Not Found" showbutton="false"/>
      </Route>
      <Route exact path="/recipes">
        <Recipe message="Welcome to recipes" showbutton="false"/>
      </Route>
      <Route exact path="/loginFailed">
        <Main message="Login Failed. Try Again" showbutton="true" auth={auth}/>
      </Route>
  </Switch>
    </Router>
  </div>
    )
  }
}
export default App;
