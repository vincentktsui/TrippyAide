import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class AttractionsMap extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.props = props;
    // }
    componentDidMount() {

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        // set the map to show SF
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        // 
        let that = this;
        google.maps.event.addListener(this.map, 'idle', () => {
            const LatLngBounds = this.map.getBounds();
            const northEast = LatLngBounds.getNorthEast();
            const southWest = LatLngBounds.getSouthWest();
            const bounds = {
                northEast: { lat: northEast.lat(), lng: northEast.lng() },
                southWest: { lat: southWest.lat(), lng: southWest.lng() }
            };
            // 
            that.props.updateFilter("bounds", bounds);
        });

        // google.maps.event.addListener(this.map, 'click', (event) => {
        //     const coords = event.latLng
        //     that.props.history.push({
        //         pathname: "benches/new",
        //         search: `lat=${coords.lat()}&lng=${coords.lng()}`
        //     });
        // });
        

    }
    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.attractions);
    }
    
    render() {
        return (
            <div id='map-container' ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default withRouter(AttractionsMap);