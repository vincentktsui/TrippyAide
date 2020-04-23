import React from 'react';
import HotelsIndexItem from './hotels_index_item';
import { Link } from 'react-router-dom';

class HotelsHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        // this.props.updateHomeFilter("city", this.props.match.params.city);
    }

    render() {
        if (Object.keys(this.props.hotels).length === 0) {
            return null;
        }
        const hotels = Object.values(this.props.hotels)
            .sort( (a,b) => b.rating - a.rating)
            .map(hotel => <HotelsIndexItem 
                hotel={hotel} />);
        console.log(this.props.hotels);
        return (
            <div className="main-content">
                <div className='home-outer'>
                    <h1>Hotels</h1>
                    {/* <div className='map-button'>
                        <Link to="/attractions/map">
                            <button className='black-button'>View Map</button>
                        </Link>

                    </div> */}
                    <div className="hotels-home">
                        <section className="hotel-listings">
                            <ul>
                                {hotels}
                            </ul>
                        </section>
                    </div>

                </div>
            </div>
        )
    }
}

export default HotelsHome;