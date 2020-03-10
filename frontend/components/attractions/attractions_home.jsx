import React from 'react';
import AttractionsIndexItem from './attractions_index_item';
import { Link } from 'react-router-dom';

class AttractionsHome extends React.Component {
    componentDidMount() {
        // debugger
        this.props.updateFilter("bounds", {} );
    }
    render() {
        if (Object.keys(this.props.attractions).length === 0) {
            return null;
        }
        // debugger
        const attractions = Object.values(this.props.attractions)
            .sort( (a,b) => b.avg_rating - a.avg_rating)
            .map(attraction => <AttractionsIndexItem key={attraction.id}
                attraction={attraction} />);
        return (
            <div>
                <Link to="/attractions/map">
                    <button className='black-button'>View Map</button>
                </Link>
                <div className="attractions-home">
                    <aside className="filters">Filters</aside>
                    <section className="attraction-listings">
                        <ul>
                            {attractions}
                        </ul>
                    </section>
                </div>

            </div>
        )
    }
}

export default AttractionsHome;