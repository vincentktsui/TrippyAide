import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class AttractionsMap extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.props = props;
    // }
    componentDidMount() {
        // debugger
        
        if (this.props.type === 'static') {

            this.map = new google.maps.Map(this.mapNode, {zoom: 13.5});
            this.MarkerManager = new MarkerManager(this.map);
            // this.MarkerManager.updateMarkers(this.props.show)
            // this.MarkerManager.updateMarkers(this.props.attractions);

        }
        else {
            const mapOptions = {
                center: { lat: 37.7858, lng: -122.435 }, // this is SF
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
            // debugger
            // google.maps.event.addListener(this.map, 'click', (event) => {
            //     const coords = event.latLng
            //     that.props.history.push({
            //         pathname: "benches/new",
            //         search: `lat=${coords.lat()}&lng=${coords.lng()}`
            //     });
            // });
        }

    }
    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.attractions);
    }

    render() {
        // debugger
        if (
            !jQuery.isEmptyObject(this.props.show)
            && (`${this.props.show.id}` === this.props.match.params.attractionId)
            ) {
                // debugger
            // console.log(this.props.show)
            this.map.setCenter({lat: this.props.show.lat, 
                lng: this.props.show.lng});
            this.MarkerManager.updateMarkers(this.props.attractions);
            
            this.MarkerManager.createMarkerFromAttraction(this.props.show,
                window.attractionMainURL)
            // this.MarkerManager.createMainMarker(this.props.show);
        }
        return (
            <div className={`map ${this.props.type}`} ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default withRouter(AttractionsMap);