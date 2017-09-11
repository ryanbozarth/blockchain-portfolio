import React, { Component } from 'react';
import profile from '../server';
import { enforceNumber, getColor } from '../utils/index';

import './Summary.css';

function returnOnInvestment(opts) {
  let {earnings, initialInvestment} = opts,
      result = {};

  enforceNumber(opts);
  if (!earnings || !initialInvestment) {
    throw new Error('Earnings and initial investment are required and must be numbers.');
  }

  result.raw = (earnings - initialInvestment) / initialInvestment;
  result.rounded = Math.round(result.raw * 10000) / 10000;
  result.percent = result.rounded * 100;

  return result.percent;
}

function amountEarned(current, initial) {
  let result = current - initial;
  return result;
}

let amount = amountEarned(profile.currentValue, profile.amountInvested);

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <div className="summary-card">
            <h5>Current Value</h5>
            <p className="primary-heading">${profile.currentValue.toLocaleString()}</p>
        </div>
        <div className="summary-card border-left">
          <h5>Day's Gain</h5>
          <p className="primary-heading green">$XXX.XX</p>
        </div>
        <div className="summary-card border-left">
          <h5>Amount Invested</h5>
          <p className="primary-heading">${profile.amountInvested.toLocaleString()}</p>
        </div>
        <div className="summary-card border-left">
          <h5>Amount Earned</h5>
          <p className={getColor(amount) + " primary-heading"}>{amountEarned(profile.currentValue, profile.amountInvested).toLocaleString()}</p>
        </div>
        <div className="summary-card border-left">
          <h5>Earnings % (ROI)</h5>
          <p className={getColor(profile.roi) + " primary-heading"}>{
            returnOnInvestment({earnings: profile.currentValue, initialInvestment: profile.amountInvested}).toLocaleString()}%
        </p>
        </div>
      </div>
    );
  }
}

export default Summary;
