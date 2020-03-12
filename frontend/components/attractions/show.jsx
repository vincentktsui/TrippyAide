import React from 'react';
import AttractionsMap from './attractions_map';
import AttractionsShow from './attractions_show';
import AttractionsReview from './attractions_review';
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
        window.scrollTo( {top: 0} );
        this.props.fetchAttraction(this.props.match.params.attractionId);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.attractionId !==
            this.props.match.params.attractionId) {
            this.props.fetchAttraction(
                this.props.match.params.attractionId).then(
                    // this.setState({ attractionId: this.props.match.params.attractionId,})
                );
            window.scrollTo({ top: 0 });
        }
        // if (this.props.show !== prevProps.show) {
        //     this.setState({dataLoaded: true})
        // }
    }

    componentWillUnmount() {
        this.props.clearAttraction();
    }
    render () {
        // console.log(this.state)
        // console.log(this.props.show)
        if (!this.props.show) {
            return null;
        }
        return (
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
                <AttractionsReview 
                    reviews={this.props.reviews}/>
            </div>
        )
    }

}
export default Show;