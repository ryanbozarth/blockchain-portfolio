import React, { Component } from 'react';

import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-card">
            <h5>Current Value</h5>
            <p className="primary-heading">$140,233.89</p>
        </div>
        <div className="summary-card border-left">
          <h5>Day's Gain</h5>
          <p className="primary-heading green">$750.31</p>
        </div>
        <div className="summary-card border-left">
          <h5>Amount Invested</h5>
          <p className="primary-heading">$50,000.00</p>
        </div>
        <div className="summary-card border-left">
          <h5>Amount Earned</h5>
          <p className="primary-heading">$43,934.55</p>
        </div>
        <div className="summary-card border-left">
          <h5>Earnings % (ROI)</h5>
          <p className="primary-heading green">24.3%</p>
        </div>
      </div>
    );
  }
}

export default Summary;
