import * as AttractionUtil from '../util/attraction_api_util';
import { fetchAttractions } from './attraction_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
// export const DELETE_FILTER = 'DELETE_FILTER';


// standard actions


export const changeFilter = (filter, value) => {
    return ({
    type: UPDATE_FILTER,
    filter,
    value
    });
}
// export const deleteFilter = (filter, value) => {
//     return ({
//     type: DELETE_FILTER,
//     filter,
//     value
//     });
// }

export const updateFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchAttractions(getState().ui.filters)(dispatch);
    };
}
// export const removeFilter = (filter, value) => {
//     return (dispatch, getState) => {
//         dispatch(deleteFilter(filter, value));
//         return fetchAttractions(getState().ui.filters)(dispatch);
//         // delicious curry!
//     };
// }


// export const filterBounds = (filter) => {
//     // 
//     return (dispatch, getState) => {
//         // 
//         dispatch(updateBounds(filter));
//         return fetchBenches(getState().ui.filters)(dispatch);
//     };
// };




