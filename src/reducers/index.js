import { combineReducers } from 'redux';
import PriceReducer from './reducer_prices';

const rootReducer = combineReducers({
  prices: PriceReducer
});

export default rootReducer;
