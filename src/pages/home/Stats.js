import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Stats.css';

class Stats extends Component {
  render() {
    return (
      <div className="stats">
        <div className="grid-item">1</div>
        <div className="grid-item border-left">2</div>
        <div className="grid-item border-left">3</div>
        <div className="grid-item border-left">4</div>
        <div className="grid-item border-left">5</div>
      </div>
    );
  }
}

export default Stats;
