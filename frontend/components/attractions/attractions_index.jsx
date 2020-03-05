import React from 'react';
import AttractionsIndexItem from './attractions_index_item';

class AttractionsIndex extends React.Component {
    componentDidMount() {
        // 
        this.props.fetchAttractions();
    }
    render() {
        // 
        if (Object.keys(this.props.attractions).length === 0)
            return null;
        // 
        const attractions = Object.values(this.props.attractions)
            .map(attraction => <AttractionsIndexItem key={attraction.id} 
                                attraction={attraction} />);
        return (
            <ul>
                {attractions}
            </ul>
        )
    }
}

export default AttractionsIndex;