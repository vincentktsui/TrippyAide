import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import attractionsErrorsReducer from './attractions_errors_reducer';
import attractionReviewErrorsReducer from './attraction_review_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    attractions: attractionsErrorsReducer,
    review: attractionReviewErrorsReducer,
});