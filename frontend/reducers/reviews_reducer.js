import { RECEIVE_ATTRACTION } from '../actions/attraction_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ATTRACTION:
            return action.attractions.reviews;
        default:
            return state;
    }
};

export default reviewsReducer;