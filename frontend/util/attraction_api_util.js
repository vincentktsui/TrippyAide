export const fetchAttractions = (filters) => {
    return $.ajax({
        method: 'GET',
        url: '/api/attractions',
        data: { filters },
    })
}

export const fetchAttraction = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/attractions/${id}`,
    })
}

export const createAttractionReview = (payload) => {
    return $.ajax({
        method: 'POST',
        url: `/api/attractions/${payload.attraction_id}/attraction_reviews`,
        data: payload
    })
}