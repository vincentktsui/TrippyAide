import * as AttractionUtil from '../util/attraction_api_util';

export const RECEIVE_ATTRACTIONS = "RECEIVE_ATTRACTIONS";
export const RECEIVE_MAP_ATTRACTIONS = 'RECEIVE_MAP_ATTRACTIONS';
export const RECEIVE_HOME_ATTRACTIONS = 'RECEIVE_HOME_ATTRACTIONS';
export const RECEIVE_ATTRACTION = 'RECEIVE_ATTRACTION';
export const CLEAR_ATTRACTION = 'CLEAR_ATTRACTION';
export const RECEIVE_ATTRACTION_ERRORS = 'RECEIVE_ATTRACTION_ERRORS';
export const RECEIVE_ATTRACTION_REVIEW_ERRORS = 'RECEIVE_ATTRACTION_REVIEW_ERRORS';

// standard actions
export const receiveAttractions = attractions => ({
    type: RECEIVE_ATTRACTIONS,
    attractions
});

export const receiveMapAttractions = attractions => ({
    type: RECEIVE_MAP_ATTRACTIONS,
    attractions
});

export const receiveHomeAttractions = attractions => ({
    type: RECEIVE_HOME_ATTRACTIONS,
    attractions
});

export const receiveAttractionErrors = errors => ({
    type: RECEIVE_ATTRACTION_ERRORS,
    errors
});

export const receiveAttractionReviewErrors = errors => ({
    type: RECEIVE_ATTRACTION_REVIEW_ERRORS,
    errors
})

export const receiveAttraction = attractions => {
    return {
        type: RECEIVE_ATTRACTION,
        attractions
    }
};

export const clearAttraction = () => ({
    type: CLEAR_ATTRACTION,
});

// thunk actions
export const fetchAttractions = (filters) => dispatch => {
    return AttractionUtil.fetchAttractions(filters)
        .then((attractions) => dispatch(receiveAttractions(attractions)))
        .fail(errors => dispatch(receiveAttractionErrors(errors.responseJSON)))
        // .fail(errors => console.log(errorserrors.responseJSON))
};

export const fetchAttraction = id => dispatch => (
    AttractionUtil.fetchAttraction(id)
        .then((attractions) => dispatch(receiveAttraction(attractions)))
        .fail(errors => dispatch(receiveAttractionErrors(errors.responseJSON)))
);

export const fetchMapAttractions = (filters) => dispatch => (
    AttractionUtil.fetchAttractions(filters)
        .then((attractions) => dispatch(receiveMapAttractions(attractions)))
        .fail(errors => dispatch(receiveAttractionErrors(errors.responseJSON)))
);

export const fetchHomeAttractions = (filters) => dispatch => (
    AttractionUtil.fetchAttractions(filters)
        .then((attractions) => dispatch(receiveHomeAttractions(attractions)))
        .fail(errors => dispatch(receiveAttractionErrors(errors.responseJSON)))
);

export const createAttractionReview = (review, history) => dispatch => (
    AttractionUtil.createAttractionReview(review)
        .then((review) => {
            history.push(`/attractions/${review.attraction_id}`)
        })
        .fail(errors => dispatch(receiveAttractionReviewErrors(errors.responseJSON)))

);



