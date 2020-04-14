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