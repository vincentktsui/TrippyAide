import React from 'react';
// import AttractionsIndexItem from './attractions_index_item';
import { Link } from 'react-router-dom';

class AttractionsHome extends React.Component {
    componentDidMount() {
        // this.props.fetchAttractions();
    }
    render() {
        return (
            <Link to="/attractions/map">
                <button>View Map</button>
            </Link>
        )
    }
}

export default AttractionsHome;