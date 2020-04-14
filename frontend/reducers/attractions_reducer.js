import { RECEIVE_ATTRACTIONS, RECEIVE_ATTRACTION, RECEIVE_MAP_ATTRACTIONS, RECEIVE_HOME_ATTRACTIONS } from '../actions/attraction_actions';

const attractionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ATTRACTIONS:
            newState = Object.assign(newState, action.attractions);
            return newState;
        case RECEIVE_HOME_ATTRACTIONS:
            newState = Object.assign(newState, action.attractions);
            return newState;
        case RECEIVE_MAP_ATTRACTIONS:
            newState = Object.assign(newState, action.attractions);
            return newState;
        case RECEIVE_ATTRACTION:
            newState = Object.assign(newState, action.attractions.nearby);
            return newState;
        default:
            return state;
    }
};

export default attractionsReducer;