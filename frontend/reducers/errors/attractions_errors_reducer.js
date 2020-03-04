import { RECEIVE_ATTRACTION_ERRORS, RECEIVE_ATTRACTION } from '../../actions/attraction_actions';

const attractionsErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ATTRACTION_ERRORS:
            return action.errors;

        case RECEIVE_ATTRACTION:
            return [];

        default:
            return state;
    }
};

export default attractionsErrorsReducer;