import _ from 'lodash';
import { FETCH_PRICES } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
  case FETCH_PRICES:
    return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
