import { RECEIVE_ATTRACTION_REVIEW_ERRORS, RECEIVE_ATTRACTION } from '../../actions/attraction_actions';

const attractionReviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ATTRACTION_REVIEW_ERRORS:
            return action.errors;

        case RECEIVE_ATTRACTION:
            return [];

        default:
            return state;
    }
};

export default attractionReviewErrorsReducer;