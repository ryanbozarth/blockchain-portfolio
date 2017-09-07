import axios from 'axios';

export const FETCH_PRICES = 'fetch_prices';

const ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/';

export function fetchPrices() {
  const request = axios.get(`${ROOT_URL}`)
                  // .then(res => {
                  //   const data = {bitcoin: res.bitcoin,
                  //                 ethereum: res.ethereum,
                  //                 litecoin: res.litecoin
                  //   }
                  //   return data
                  // })

  return {
    type: FETCH_PRICES,
    payload: request
  };
}
