import { RECEIVE_ATTRACTION } from '../actions/attraction_actions';

const showAttractionsReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_ATTRACTION:
            return Object.keys(action.attractions.nearby);
        default:
            return state;
    }
};

export default showAttractionsReducer;