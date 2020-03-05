export const fetchAttractions = (filters) => {
    // 
    return $.ajax({
        method: 'GET',
        url: '/api/attractions',
        data: { filters },
    })
}

// export const createBench = (bench) => {
//     return $.ajax({
//         method: 'POST',
//         url: 'api/benches',
//         data: { bench },
//     })
// }

export const fetchAttraction = (id) => {
    // 
    return $.ajax({
        method: 'GET',
        url: `/api/attractions/${id}`,
    })
}