import { RECEIVE_HOME_ATTRACTIONS } from '../actions/attraction_actions';

const homeAttractionsReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_HOME_ATTRACTIONS:
            return Object.keys(action.attractions);
        default:
            return state;
    }
};

export default homeAttractionsReducer;