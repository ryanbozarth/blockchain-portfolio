import _ from 'lodash';
import { FETCH_PRICE_LIST, AMOUNT_EARNED, ROI, INITIAL_INVESTMENT, CURRENT_VALUE } from '../actions';

const INITIAL_STATE = {
  pricesList: {},
  user: {}
};

const test = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRICE_LIST:
      return {...state, pricesList: _.mapKeys(action.payload.data, 'id')};
    case INITIAL_INVESTMENT:
      return { ...state, user: { ...state.user, initialInvestment: action.payload} }
    case CURRENT_VALUE:
      return { ...state, user: { ...state.user, currentValue: action.payload} }
    case AMOUNT_EARNED:
      return { ...state, user: { ...state.user, amountEarned: action.payload} }
    case ROI:
      return { ...state, user: { ...state.user, roi: action.payload} }
    default:
      return state;
  }
}

export default test;
