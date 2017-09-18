import React, { Component } from 'react';
import { connect } from 'react-redux';
import profile from '../server';
import { amountEarned, roi } from '../actions';
import { enforceNumber, getColor } from '../utils/index';
import _ from 'lodash';

import '../components/Summary.css';

function returnOnInvestment(currentValue, amountInvested) {
  let result = {};

  // enforceNumber(currentValue, amountInvested);
  // if (!currentValue || !amountInvested) {
  //   throw new Error('Earnings and initial investment are required and must be numbers.');
  // }

  result.raw = (currentValue - amountInvested) / amountInvested;
  result.rounded = Math.round(result.raw * 10000) / 10000;
  result.percent = result.rounded * 100;
  console.log(result.percent)
  return result.percent;
}

let roiResult = returnOnInvestment(profile.currentValue, profile.amountInvested);

function calculateEarned(current, initial) {
  let result = current - initial;
  return result;
}

let amount = calculateEarned(profile.currentValue, profile.amountInvested);

class Summary extends Component {
  componentDidMount() {
    this.props.amountEarned(amount);
    this.props.roi(roiResult);
  }
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
          <p className={getColor(amount) + " primary-heading"}>{_.get(this.props, 'user.amountEarned', 0).toLocaleString()}</p>
        </div>
        <div className="summary-card border-left">
          <h5>Earnings % (ROI)</h5>
          <p className={getColor(roiResult) + " primary-heading"}>{_.get(this.props, 'user.roi', 0).toLocaleString()}%
        </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.prices.user }
}

export default connect(mapStateToProps, { amountEarned, roi })(Summary);
