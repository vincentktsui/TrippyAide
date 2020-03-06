import React from 'react';
import AttractionsIndexItem from './attractions_index_item';
import { Link } from 'react-router-dom';

class AttractionsIndex extends React.Component {
    componentDidMount() {
        // this.props.fetchAttractions();
    }
    render() {
        // 
        // 
        const attractions = Object.values(this.props.attractions)
            .map(attraction => <AttractionsIndexItem key={attraction.id} 
                                attraction={attraction} />);
        return (
            <div>
                <Link to='/attractions'>
                    <button>Close Map</button>
                </Link>
                <ul>
                    {attractions}
                </ul>
            </div>
        )
    }
}

export default AttractionsIndex;