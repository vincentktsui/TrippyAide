import { START_LOADING, RECEIVE_HOME_ATTRACTIONS, RECEIVE_ATTRACTION } from '../actions/attraction_actions';

const loadingReducer = (state = true, action) => {

    switch (action.type) {
        case START_LOADING:
            return true;
        case RECEIVE_HOME_ATTRACTIONS:
            return false;
        case RECEIVE_ATTRACTION:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;