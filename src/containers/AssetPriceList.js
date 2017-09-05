import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrices } from '../actions';

class AssetPriceList extends Component {
  componentDidMount() {
    this.props.fetchPrices();
  }

  render() {
    console.log(this.props.prices)
    return (
      <div className="card">
        <h3>Asset Prices</h3>
          <div className="card-row">
            <p>Bitcoin</p>
            <p className="primary-heading green">$4356.95</p>
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
    );
  }
}

function mapStateToProps(state) {
  return { prices: state.prices }
}

export default  connect(mapStateToProps, { fetchPrices })(AssetPriceList);
