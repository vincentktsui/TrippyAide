import React from 'react';
import AttractionsIndexItem from './attractions_index_item';
import { Link } from 'react-router-dom';

class AttractionsIndex extends React.Component {
    // componentDidMount() {
    //     // this.props.fetchAttractions();
    // }
    render() {
        // 
        // 
        const attractions = Object.values(this.props.attractions)
            .sort((a, b) => b.avg_rating - a.avg_rating)
            .map(attraction => (<AttractionsIndexItem key={attraction.id}
                attraction={attraction}
                type={"full-map"}
                indexHover={this.props.indexHover}
                removeHover={this.props.removeHover} />));
        return (
            <aside className="attractions-map-list">
                <ul>
                    <li>
                        <Link to='/attractions'>
                            <button className='black-button'>
                                <span>&times;&nbsp;</span>Close Map
                            </button>
                        </Link>
                    </li>

                    {attractions}
                </ul>
            </aside>
        )
    }
}

export default AttractionsIndex;