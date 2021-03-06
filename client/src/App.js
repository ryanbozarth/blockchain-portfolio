import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route,
         Switch
       } from 'react-router-dom'
import 'normalize.css';
import './Reset.css';
import './App.css';

import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
