import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {PieChart, Pie, Legend, Tooltip} from 'recharts';

import './Content.css';

class Content extends Component {
  render() {
    return (
      <div>
      <div className="content content-summary">
        <div className="card summary-tile">
          <h3>Profile Value</h3>
            <div className="card-row">
              <p>Current Value</p>
              <p className="primary-heading">$140,233.89</p>
            </div>
            <div className="card-row">
              <p>Day's Gain</p>
              <p className="primary-heading green">$750.31</p>
            </div>
            <div className="card-row">
              <p>Amount Invested</p>
              <p className="primary-heading">50,000.00</p>
            </div>
            <div className="card-row">
              <p>Amount Earned</p>
              <p className="primary-heading">43.934.55</p>
            </div>
            <div className="card-row">
              <p>Earnings % (ROI)</p>
              <p className="primary-heading green">24.3%</p>
            </div>
        </div>
      </div>

      <div className="content content-portfolio">
        <div className="card">
          <h3>Portfolio Makeup</h3>
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

        <div className="card">
          <h3>Asset Prices</h3>
            <div className="card-row">
              <p>Bitcoin</p>
              <p className="primary-heading green">$4,321.32</p>
            </div>
            <div className="card-row">
              <p>Ethereum</p>
              <p className="primary-heading green">$356.95</p>
            </div>
            <div className="card-row">
              <p>Litecoin</p>
              <p className="primary-heading red">$61.84</p>
            </div>
            <div className="card-row footnote">
              <p>*Based off of GMT</p>
            </div>
        </div>
      </div>
    </div>

    );
  }
}

export default Content;
