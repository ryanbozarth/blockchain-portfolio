import { combineReducers } from 'redux';
import prices from './reducer_prices';

const rootReducer = combineReducers({
    prices
});

export default rootReducer;
