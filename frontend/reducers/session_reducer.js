import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullState = {
    id: null
};

const sessionReducer = (state = _nullState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState['id'] = action.user.id;
            return newState;

        case LOGOUT_CURRENT_USER:
            return _nullState;

        default:
            return state;
    }
};

export default sessionReducer;