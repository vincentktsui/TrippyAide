export const fetchHotels = (lat, lng) => {
    const places = new google.maps.places.PlacesService(document.createElement('div'));

    const params = {
        location: new google.maps.LatLng(lat, lng),
        radius: 50000,
        rankby: 'prominence',
        types: ['lodging'], 
    }
    // debugger
    return new Promise((resolve, reject) => {
        places.nearbySearch(params, (results, status) => {
            // debugger
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const ret = {};
                for (let i = 0; i < results.length; i++) {
                    ret[i] = results[i];
                }
                // debugger
                resolve(ret);
            }
            else {
                reject("failed")
            }
        })
    })

}