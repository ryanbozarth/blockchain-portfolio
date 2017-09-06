import axios from 'axios';

export const FETCH_PRICES = 'fetch_prices';

const ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/';

export function fetchPrices() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_PRICES,
    payload: request
  };
}
