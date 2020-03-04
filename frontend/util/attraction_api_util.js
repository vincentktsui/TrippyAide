export const fetchAttractions = (filters) => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: '/api/attractions',
        data: { filters },
        // error: (err) => console.log(err)
    })
}

// export const createBench = (bench) => {
//     return $.ajax({
//         method: 'POST',
//         url: 'api/benches',
//         data: { bench },
//         error: (err) => console.log(err)
//     })
// }

export const fetchAttraction = (id) => {
    // debugger
    return $.ajax({
        method: 'GET',
        url: `/api/attractions/${id}`,
        // error: (err) => console.log(err)
    })
}