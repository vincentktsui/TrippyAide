import { UPDATE_MAP_FILTER } from '../actions/filter_actions';

const mapFiltersReducer = (state = { bounds: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        // case UPDATE_BOUNDS:
        //     newState = Object.assign({}, state, {bounds: action.bounds});
        //     return newState;
        case UPDATE_MAP_FILTER:
            newState[action.filter] = action.value;
            return newState;
        default:
            return state;
    }
};

export default mapFiltersReducer;