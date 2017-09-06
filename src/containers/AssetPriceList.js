import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrices } from '../actions';

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

round(1.005, 2)


class AssetPriceList extends Component {
  componentDidMount() {
    this.props.fetchPrices();
  }

  renderPrices() {
    const { bitcoin, ethereum, litecoin } = this.props.prices
    console.log(bitcoin)
    if (!bitcoin) {
      return <div></div>
    }
      else {
        return (
          <div>
            <div className="card-row">
              <p>{bitcoin.name}</p>
              <p className="primary-heading">${round(bitcoin.price_usd, 2).toLocaleString()}</p>
            </div>
            <div className="card-row">
              <p>{ethereum.name}</p>
              <p className="primary-heading">${round(ethereum.price_usd, 2).toLocaleString()}</p>
            </div>
            <div className="card-row">
              <p>{litecoin.name}</p>
              <p className="primary-heading">${round(litecoin.price_usd, 2).toLocaleString()}</p>
            </div>
            <div className="card-row footnote">
              <p>*Based off of GMT</p>
            </div>
          </div>
        )
      }
    }

  render() {

    return (
      <div className="card">
        <h3>Asset Prices</h3>
          {this.renderPrices()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { prices: state.prices }
}

export default  connect(mapStateToProps, { fetchPrices })(AssetPriceList);
