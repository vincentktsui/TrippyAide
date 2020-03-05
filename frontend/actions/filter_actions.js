import * as AttractionUtil from '../util/attraction_api_util';
import { fetchAttractions } from './attraction_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';


// standard actions


export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const updateFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchAttractions(getState().ui.filters)(dispatch);
        // delicious curry!
    };
}


// export const filterBounds = (filter) => {
//     // debugger
//     return (dispatch, getState) => {
//         // debugger
//         dispatch(updateBounds(filter));
//         return fetchBenches(getState().ui.filters)(dispatch);
//     };
// };




