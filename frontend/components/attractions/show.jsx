import React from 'react';
import AttractionsMap from './attractions_map';
import AttractionsShow from './attractions_show';
import AttractionsReview from './attractions_review';
import FeaturesNav from '../features_nav';
// import FilterForm from './filter_form';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            // dataLoaded: false
            attractionId: props.match.params.attractionId,
        }
        // this.map = new google.maps.Map(this.mapNode);
    }
    componentDidMount() {
        this.props.fetchAttraction(this.props.match.params.attractionId);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.attractionId !==
            this.props.match.params.attractionId) {
            this.props.fetchAttraction(this.props.match.params.attractionId)
                .then(
                    // this.setState({ attractionId: this.props.match.params.attractionId,})
                );
        }
    }

    componentWillUnmount() {
        // this.props.clearAttraction();
    }
    render () {
        // if (!this.props.show) {
        if (!this.props.show || this.props.loading) {
            return null;
        }
        return (
            <div className="main-content">
            <FeaturesNav />
            <div>
                <AttractionsShow
                    // attractions={props.attractions}
                    // fetchAttraction={props.fetchAttraction}
                    show={this.props.show}
                    // match={props.match} 
                    />
                <AttractionsMap
                    type="static"
                    attractions={this.props.attractions}
                    show={this.props.show}
                    // updateFilter={props.updateFilter} 
                    />
                {/* <AttractionsTop /> */}
                <AttractionsReview
                    show={this.props.show}
                    reviews={this.props.reviews}
                    loggedIn={this.props.loggedIn}
                    history={this.props.history}
                    match={this.props.match}/>
            </div>
            </div>
        )
    }

}
export default Show;