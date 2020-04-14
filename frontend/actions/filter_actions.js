import * as AttractionUtil from '../util/attraction_api_util';
import { fetchAttractions, fetchHomeAttractions, fetchMapAttractions } from './attraction_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_HOME_FILTER = 'UPDATE_HOME_FILTER';
export const UPDATE_MAP_FILTER = 'UPDATE_MAP_FILTER';
// export const DELETE_FILTER = 'DELETE_FILTER';


// standard actions


export const changeFilter = (filter, value) => {
    return ({
    type: UPDATE_FILTER,
    filter,
    value
    });
}
export const changeHomeFilter = (filter, value) => {
    return ({
    type: UPDATE_HOME_FILTER,
    filter,
    value
    });
}
export const changeMapFilter = (filter, value) => {
    return ({
    type: UPDATE_MAP_FILTER,
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
export const updateHomeFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeHomeFilter(filter, value));
        return fetchHomeAttractions(getState().ui.homeFilters)(dispatch);
    };
}
export const updateMapFilter = (filter, value) => {
    return (dispatch, getState) => {
        dispatch(changeMapFilter(filter, value));
        return fetchMapAttractions(getState().ui.mapFilters)(dispatch);
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




