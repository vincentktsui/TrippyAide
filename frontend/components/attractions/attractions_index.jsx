import React from 'react';
import AttractionsIndexItem from './attractions_index_item';

class AttractionsIndex extends React.Component {
    componentWillMount() {
        // debugger
        this.props.fetchAttractions();
    }
    render() {
        debugger
        if (Object.keys(this.props.attractions).length === 0)
            return null;
        // debugger
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