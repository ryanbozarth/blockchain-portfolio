import axios from 'axios';

export const FETCH_PRICE_LIST = 'FETCH_PRICES';
export const CURRENT_VALUE = 'CURRENT_VALUE';
export const INITIAL_INVESTMENT = 'INITIAL_INVESTMENT';
export const AMOUNT_EARNED = 'AMOUNT_EARNED';
export const ROI = 'ROI';

const ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/';

export function fetchPriceList() {
  const request = axios.get(`${ROOT_URL}`)

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_PRICE_LIST, payload: data })
    });
  }
}

export function initialInvestment(data) {
    return (dispatch) =>
     dispatch({ type: INITIAL_INVESTMENT, payload: data });
}

export function amountEarned(data) {
    return (dispatch) =>
     dispatch({ type: AMOUNT_EARNED, payload: data });
}

export function roi(data) {
    return (dispatch) =>
     dispatch({ type: ROI, payload: data });
}

export function currentValue(data) {
    return (dispatch) =>
     dispatch({ type: CURRENT_VALUE, payload: data });
}
