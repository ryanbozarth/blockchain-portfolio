import React, { Component } from 'react';

class ProfileValue extends Component {
  render() {
    return (
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
    );
  }
}

export default ProfileValue;
