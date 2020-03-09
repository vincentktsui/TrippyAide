import BubbleOverlay from './bubble_overlay';

class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.bubbles = {};
        this.clickbubbles = {};
        this.removeMarker = this.removeMarker.bind(this);
        this.createMarkerFromAttraction = this.createMarkerFromAttraction.bind(this);
    }

    updateMarkers(attractions) {
        let that = this;
        Object.keys(this.markers).forEach( id => {
            if (
                (!attractions[id])
                || (this.markers[id].icon.url === window.attractionMainURL)
             ) {
                that.removeMarker(id);
            }
        });
        Object.values(attractions).forEach((attraction) => {
            if (!that.markers[attraction.id])
                that.createMarkerFromAttraction(attraction);
        });

        // 
    }
    // createMainMarker(attraction) {
    //     // debugger
    //     if (this.markers[attraction.id]) {
    //         this.removeMarker(attraction.id);
    //     }
    //     const icon = window.attractionMainURL;
    //     const pos = new google.maps.LatLng(attraction.lat, attraction.lng);
    //     const marker = new google.maps.Marker({
    //         position: pos,
    //         map: this.map,
    //         icon: icon
    //     })
    //     this.markers[attraction.id] = marker;
    // }

    createMarkerFromAttraction(attraction, icon) {
        icon = (icon) ? { url: icon, scaledSize: new google.maps.Size(50,50) } :
         {url: window.attractionSmallURL, scaledSize: new google.maps.Size(25,30)};

        if (this.markers[attraction.id]) {
            this.removeMarker(attraction.id)
        }
        const pos = new google.maps.LatLng(attraction.lat, attraction.lng);
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map,
            icon: icon
        })
        // debugger

        const bubble = new BubbleOverlay({ map: this.map, location: pos, arrowSize: 0 });
        this.bubbles[attraction.id] = bubble;
        const clickbubble = new BubbleOverlay({ map: this.map, location: pos})
        this.clickbubbles[attraction.id] = clickbubble;

        marker.addListener('mouseover', () => {
            bubble.setMap(bubble.options.map);
        })
        marker.addListener('mouseout', () => {
            bubble.setMap(null);
        })
        marker.addListener('click', () => {
            clickbubble.setMap(bubble.options.map);
        })
        // google.maps.event.addListener()

        this.markers[attraction.id] = marker;
    }

    removeMarker(id) {
        // debugger
        this.markers[id].setMap(null);
        delete this.markers[id];
        this.bubbles[id].setMap(null);
        delete this.bubbles[id];
    }

}

export default MarkerManager