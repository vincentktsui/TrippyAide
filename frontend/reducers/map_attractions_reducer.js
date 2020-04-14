import { RECEIVE_MAP_ATTRACTIONS } from '../actions/attraction_actions';

const mapAttractionsReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_MAP_ATTRACTIONS:
            return Object.keys(action.attractions);
        default:
            return state;
    }
};

export default mapAttractionsReducer;