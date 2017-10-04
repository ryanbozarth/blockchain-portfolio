import React, { Component } from 'react';
import ProfileValue from './ProfileValue';
import PortfolioDiversity from './PortfolioDiversity';
import AssetPriceList from '../containers/AssetPriceList';

import './Content.css';


class Content extends Component {
  render() {
    return (
      <div>
      <div className="content content-summary">
      <ProfileValue />
      </div>
      <div className="content content-portfolio">
        <PortfolioDiversity />
        <AssetPriceList />
      </div>
    </div>

    );
  }
}

export default Content;
