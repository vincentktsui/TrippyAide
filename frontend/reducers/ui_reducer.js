import filtersReducer from './filters_reducer';
import { combineReducers } from 'redux';
import attractionReducer from './attraction_reducer';

export default combineReducers({
    attraction: attractionReducer,
    filters: filtersReducer,
});