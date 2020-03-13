import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class AttractionsMap extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.props = props;
    // }
    componentDidMount() {
        
        if (this.props.type === 'static') {

            this.map = new google.maps.Map(this.mapNode, {
                zoom: 13, 
                gestureHandling: 'greedy',
                mapTypeControl: false,
                streetViewControl: false,
                clickableIcons: false,

            });
            this.MarkerManager = new MarkerManager(this.map, 'static');
            // this.MarkerManager.updateMarkers(this.props.show)
            // this.MarkerManager.updateMarkers(this.props.attractions);

        }
        else {
            const mapOptions = {
                center: { lat: 37.7858, lng: -122.435 }, // this is SF
                zoom: 13,
                gestureHandling: 'greedy',
                mapTypeControl: false,
                streetViewControl: false,
                clickableIcons: false,
            };
            // set the map to show SF
            // wrap this.mapNode in a Google Map
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map, 'dynamic');
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
            // run once to initialize 

            // that.props.updateFilter("bounds", {
            //     northEast: {
            //         lat: 37.79597418720419,
            //         lng: - 122.34350448608397,
            //     },
            //     southWest: {
            //         lat: 37.775624411929606,
            //         lng: -122.526495513916,
            //     }
            // })
        }
        google.maps.event.addListener(this.map, 'click', (event) => {
            this.MarkerManager.clearClicked();
        });

    }
    componentDidUpdate() {
        if (this.props.type === 'dynamic') {
            this.MarkerManager.updateMarkers(this.props.attractions);
        }
    }

    render() {
        if (
            !jQuery.isEmptyObject(this.props.show)
            && (`${this.props.show.id}` === this.props.match.params.attractionId)
            ) {
            this.map.setCenter({lat: this.props.show.lat, 
                lng: this.props.show.lng});
            this.MarkerManager.updateMarkers(this.props.attractions);
            
            this.MarkerManager.createMarkerFromAttraction(this.props.show,
                window.attractionMainURL)
            // this.MarkerManager.createMainMarker(this.props.show);
        }
        if (this.MarkerManager && Object.keys(this.MarkerManager.markers).length !== 0) {
            if (this.props.hovered) {
                this.MarkerManager.panTo(this.props.hovered);
            }
            else {
                this.MarkerManager.clearHovered();
            }
        }
        return (
            <div className={`map ${this.props.type}`} ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default withRouter(AttractionsMap);