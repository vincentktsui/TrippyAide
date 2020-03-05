import filtersReducer from './filters_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    filters: filtersReducer,
});