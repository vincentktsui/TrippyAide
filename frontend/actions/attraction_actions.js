import * as AttractionUtil from '../util/attraction_api_util';

export const RECEIVE_ATTRACTIONS = 'RECEIVE_ATTRACTIONS';
export const RECEIVE_ATTRACTION = 'RECEIVE_ATTRACTION';
export const CLEAR_ATTRACTION = 'CLEAR_ATTRACTION';
export const RECEIVE_ATTRACTION_ERRORS = 'RECEIVE_ATTRACTION_ERRORS';


// standard actions
export const receiveAttractions = attractions => ({
    type: RECEIVE_ATTRACTIONS,
    attractions
});

export const receiveAttractionErrors = errors => ({
    type: RECEIVE_ATTRACTION_ERRORS,
    errors
});

export const receiveAttraction = attraction => {
    return {
        type: RECEIVE_ATTRACTION,
        attraction
    }
};

export const clearAttraction = () => ({
    type: CLEAR_ATTRACTION,
});


// thunk actions
export const fetchAttractions = (filters) => dispatch => (
    AttractionUtil.fetchAttractions(filters)
        .then((attractions) => dispatch(receiveAttractions(attractions)))
        .fail(errors => dispatch(receiveAttractionErrors(errors.responseJSON)))
);

export const fetchAttraction = id => dispatch => (
    AttractionUtil.fetchAttraction(id)
        .then((attraction) => dispatch(receiveAttraction(attraction)))
        .fail(errors => dispatch(receiveAttractionErrors(errors.responseJSON)))
);

// export const createAttraction = (attraction) => dispatch => (
//     AttractionUtil.createAttraction(attraction)
//         .then((attraction) => dispatch(receiveAttraction(attraction)))
//         .fail(errors => dispatch(receiveAttractionErrors(errors.responseJSON)))

// );



