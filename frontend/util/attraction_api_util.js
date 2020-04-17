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

export const createAttractionReview = (attraction_review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/attractions/${attraction_review.attraction_id}/attraction_reviews`,
        data: {attraction_review}
    })
}