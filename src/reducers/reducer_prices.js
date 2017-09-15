import _ from 'lodash';
import { FETCH_PRICE_LIST, AMOUNT_EARNED } from '../actions';

const INITIAL_STATE = {
  pricesList: {},
  user: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRICE_LIST:
      return {...state, pricesList: _.mapKeys(action.payload.data, 'id')};
    case AMOUNT_EARNED:
      return { ...state, user: {amountEarned: action.payload} }
    default:
      return state;
  }
}
