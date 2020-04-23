import { RECEIVE_HOTELS } from '../actions/hotel_actions';

const hotelsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_HOTELS:
            return action.hotels;
        default:
            return state;
    }
}

export default hotelsReducer;