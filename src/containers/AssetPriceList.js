import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPriceList } from '../actions';
import _ from 'lodash';
import { getColor, round } from '../utils/index';

class AssetPriceList extends Component {
  componentDidMount() {
    this.props.fetchPriceList();
  }

  renderPriceList() {
    const { bitcoin, ethereum, litecoin } = this.props.pricesList
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
          {this.renderPriceList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pricesList: state.prices.pricesList }
}

export default connect(mapStateToProps, { fetchPriceList })(AssetPriceList);
