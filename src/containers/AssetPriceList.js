import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrices } from '../actions';
import _ from 'lodash';
import { getColor } from '../utils/index';

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

class AssetPriceList extends Component {
  componentDidMount() {
    this.props.fetchPrices();
  }

  renderPrices() {
    const { bitcoin, ethereum, litecoin } = this.props.prices;
    const coins = _.compact([bitcoin, ethereum, litecoin]);
    const coinTemplate = _.map(coins, (coin) => {
        return (
          <div className="card-row" key={coin.id}>
            <p>{coin.name}</p>
            <p className={getColor(coin.percent_change_24h) + " primary-heading"}>${round(coin.price_usd, 2).toLocaleString()}</p>
          </div>
        )
      })
        return <div>
             {coinTemplate}
            <div className="card-row footnote">
              <p>*Based off of GMT</p>
            </div>
          </div>
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
