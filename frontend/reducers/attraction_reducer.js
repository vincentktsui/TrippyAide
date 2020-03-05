import { RECEIVE_ATTRACTION } from '../actions/attraction_actions';

const attractionReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ATTRACTION:
            return action.attractions.show;
        default:
            return state;
    }
};

export default attractionReducer;