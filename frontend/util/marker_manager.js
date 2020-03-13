import BubbleOverlay from './bubble_overlay';

class MarkerManager {
    constructor(map, type) {
        this.map = map;
        this.type = type;
        this.markers = {};
        this.bubbles = {};
        this.clickbubbles = {};
        this.removeMarker = this.removeMarker.bind(this);
        this.createMarkerFromAttraction = this.createMarkerFromAttraction.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
    }

    clearClicked() {
        Object.values(this.clickbubbles).forEach( clickbubble => clickbubble.setMap(null));
    }

    updateMarkers(attractions) {
        let that = this;
        Object.keys(this.markers).forEach(id => {
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
        icon = (icon) ? { url: icon, scaledSize: new google.maps.Size(50, 50) } :
            { url: window.attractionSmallURL, scaledSize: new google.maps.Size(25, 30) };

        if (this.markers[attraction.id]) {
            this.removeMarker(attraction.id)
        }
        const pos = new google.maps.LatLng(attraction.lat, attraction.lng);
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map,
            icon: icon
        })

        const bubble = new BubbleOverlay({ map: this.map, location: pos, arrowSize: 5 }, attraction, 'hover');
        this.bubbles[attraction.id] = bubble;
        const clickbubble = new BubbleOverlay({ map: this.map, location: pos, contentHeight: 300 }, attraction, 'click')
        this.clickbubbles[attraction.id] = clickbubble;

        marker.addListener('mouseover', () => {
            bubble.setMap(bubble.options.map);
            if (this.type === 'dynamic') {
                document.getElementById(`attraction-${attraction.id}`).scrollIntoView({ behavior: "smooth", block: "center" });
            }
        })
        marker.addListener('mouseout', () => {
            bubble.setMap(null);
        })
        marker.addListener('click', () => {
            this.clearClicked();
            clickbubble.setMap(clickbubble.options.map);
        })
        // google.maps.event.addListener()

        this.markers[attraction.id] = marker;
    }

    panTo(id) {
        this.clearHovered();
        this.bubbles[id].setMap(this.map);
        // this.map.panTo(this.markers[id].position);
    }

    clearHovered() {
        Object.values(this.bubbles).forEach(bubble => bubble.setMap(null));
    }

    removeMarker(id) {
        this.markers[id].setMap(null);
        delete this.markers[id];
        this.bubbles[id].setMap(null);
        delete this.bubbles[id];
        this.clickbubbles[id].setMap(null);
        delete this.clickbubbles[id];
    }

}

export default MarkerManager