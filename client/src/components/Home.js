import React, { Component } from 'react';
import Header from './Header';
import Summary from '../containers/Summary';
import Content from './Content';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="grid">
        <Header />
        <Summary />
        <Content />
      </div>
    );
  }
}

export default Home;
