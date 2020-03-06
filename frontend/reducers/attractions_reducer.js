import { RECEIVE_ATTRACTIONS, RECEIVE_ATTRACTION } from '../actions/attraction_actions';

const attractionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ATTRACTIONS:
            return action.attractions;
        case RECEIVE_ATTRACTION:
            // newState = Object.assign(newState, action.attractions.nearby);
            // return newState;
            newState = Object.assign({}, action.attractions.nearby);
            return newState;
        default:
            return state;
    }
};

export default attractionsReducer;