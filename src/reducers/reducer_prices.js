import _ from 'lodash';
import { FETCH_PRICES } from '../actions';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRICES:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
