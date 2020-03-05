class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.removeMarker = this.removeMarker.bind(this);
        this.createMarkerFromAttraction = this.createMarkerFromAttraction.bind(this);
    }

    updateMarkers(attractions) {
        let that = this;
        Object.values(attractions).forEach((attraction) => {
            if (!that.markers[attraction.id])
                that.createMarkerFromAttraction(attraction);
        })
        // debugger
        Object.keys(this.markers).forEach( id => {
            if (!attractions[id]) {
                that.removeMarker(that.markers[id], id);
            }
        })
        console.log(this.markers)
    }
    createMarkerFromAttraction(attraction) {
        const pos = new google.maps.LatLng(attraction.lat, attraction.lng);
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        })
        this.markers[attraction.id] = marker;
    }

    removeMarker(marker, id) {
        marker.setMap(null);
        delete this.markers[id]
    }
}

export default MarkerManager