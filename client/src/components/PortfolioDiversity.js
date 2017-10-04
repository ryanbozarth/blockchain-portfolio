import React, { Component } from 'react';

class PortfolioDiversity extends Component {
  render() {
    return (
      <div className="card">
        <h3>Portfolio Makeup</h3>
        <div className="chart"></div>
        <div className="card-row">
          <p>Bitcoin</p>
          <p className="primary-heading">10%</p>
        </div>
        <div className="card-row">
          <p>Ethereum</p>
          <p className="primary-heading">80%</p>
        </div>
        <div className="card-row">
          <p>Litecoin</p>
          <p className="primary-heading ">10%</p>
        </div>
        <div className="card-row"></div>
      </div>
    );
  }
}

export default PortfolioDiversity;
