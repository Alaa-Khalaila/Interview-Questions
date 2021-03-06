import React, { Component } from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Node from './components/Node'
import Reactt from './components/Reactt'
import Devloper from './components/Devloper'

export default class App extends Component {
  render() {
    return <div>
      <Router>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/node'>
          <Node/>
        </Route>
        <Route path='/react'>
          <Reactt/>
        </Route>
        <Route path='/devlopers'>
          <Devloper/>
        </Route>
      </Router>
        
    </div>
  }
}

