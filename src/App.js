import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Switch
       } from 'react-router-dom'
import 'normalize.css';
import './App.css';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path='/' component={Header} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
