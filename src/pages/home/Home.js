import React, { Component } from 'react';
import Header from './Header';
import Stats from './Stats';
import Content from './Content';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="grid">
        <Header />
        <Stats />
        <Content />
      </div>
    );
  }
}

export default Home;
