import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="card">
          <h3>Portfolio Makeup</h3>
        </div>
        <div className="card">
          <h3>Asset Prices</h3>
          <div className="card-row">
            <p>Bitcoin</p>
            <p className="primary-heading">$4,321.32</p>
          </div>
          <div className="card-row">
            <p>Ethereum</p>
            <p className="primary-heading">$356.95</p>
          </div>
          <div className="card-row">
            <p>Litecoin</p>
            <p className="primary-heading">$61.84</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
