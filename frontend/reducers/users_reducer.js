import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullState = {};

const userReducer = (state = _nullState, action) => {

    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, state, { [action.user.id]: action.user });
            return newState;

        default:
            return state;
    }
};

export default userReducer;