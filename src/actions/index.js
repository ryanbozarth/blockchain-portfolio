import axios from 'axios';

export const FETCH_PRICE_LIST = 'FETCH_PRICES';
export const AMOUNT_EARNED = 'AMOUNT_EARNED';

const ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/';

export function fetchPriceList() {
  const request = axios.get(`${ROOT_URL}`)

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_PRICE_LIST, payload: data })
    });
  }
}

export function amountEarned(data) {
    return (dispatch) =>
     dispatch({ type: AMOUNT_EARNED, payload: data });
}
