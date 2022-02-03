import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Login from './Components/Login';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
 } from 'react-router-dom';
 // import firebase from "firebase"
import firebase from "firebase/compat/app"; 


function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/detail">
          <Detail /> 
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
