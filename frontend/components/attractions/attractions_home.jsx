import React from 'react';
import AttractionsIndexItem from './attractions_index_item';
import { Link } from 'react-router-dom';

class AttractionsHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {page: 1};
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }
    componentDidMount() {
        // debugger
        this.props.updateFilter("bounds", {} );
    }

    nextPage() {
        // debugger
        if (this.state.page < Math.floor(
            Object.keys(this.props.attractions).length / 20) + 1) {
                this.setState({page: this.state.page + 1});
            }
    }
    prevPage() {
        if (this.state.page > 1) {
            this.setState({page: this.state.page - 1});
        }
    }
    render() {
        if (Object.keys(this.props.attractions).length === 0) {
            return null;
        }
        const nextdisabled = (this.state.page >= Math.floor(
            Object.keys(this.props.attractions).length / 20) + 1) ? true : false;
        const prevdisabled = (this.state.page <= 1) ? true : false;
        // debugger
        const attractions = Object.values(this.props.attractions)
            .sort( (a,b) => b.avg_rating - a.avg_rating)
            .slice((this.state.page - 1) * 20, this.state.page * 20)
            .map(attraction => <AttractionsIndexItem key={attraction.id}
                attraction={attraction} />);
        return (
            <div>
                <Link to="/attractions/map">
                    <button className='black-button'>View Map</button>
                </Link>
                <div className="attractions-home">

                    <aside className="filters">
                        <div>
                            <input type="checkbox" /><span>{'Sights & Landmarks'}</span>
                            <ul>
                                <li><input type="checkbox" /><span>{'Landmarks'}</span></li>
                                <li><input type="checkbox" /><span>{'Architectural Buildings'}</span></li>
                                <li><input type="checkbox" /><span>{'Monuments & Statues'}</span></li>
                                <li><input type="checkbox" /><span>{'Historic Sites'}</span></li>
                                <li><input type="checkbox" /><span>{'Sacred & Religious Sites'}</span></li>
                            </ul>
                        </div>
                        <div>
                            <input type="checkbox" /><span>{'Nature & Parks'}</span>
                            <ul>
                                <li><input type="checkbox" /><span>{'Parks'}</span></li>
                                <li><input type="checkbox" /><span>{'Beaches'}</span></li>
                            </ul>
                        </div>
                        <div>
                            <input type="checkbox" /><span>{'Museums'}</span>
                        </div>
                        <div>
                            <input type="checkbox" /><span>{'Zoos & Aquariums'}</span>
                            <ul>
                                <li><input type="checkbox" /><span>{'Zoos'}</span></li>
                                <li><input type="checkbox" /><span>{'Aquariums'}</span></li>
                            </ul>
                        </div>
                        <div>
                            <input type="checkbox" />{'Rating'}
                            <ul>
                                <li><input type="checkbox" />{'5'}</li>
                                <li><input type="checkbox" />{'4'}</li>
                                <li><input type="checkbox" />{'3'}</li>
                                <li><input type="checkbox" />{'2'}</li>
                                <li><input type="checkbox" />{'1'}</li>
                            </ul>
                        </div>
                    
                    </aside>

                    <section className="attraction-listings">
                        <ul>
                            {attractions}
                            <li>
                                <button 
                                className="black-button" 
                                onClick={this.prevPage}
                                disabled={prevdisabled}>Previous</button>
                                <button 
                                className="black-button" 
                                onClick={this.nextPage}
                                disabled={nextdisabled}>Next</button>
                            </li>
                        </ul>
                    </section>
                </div>

            </div>
        )
    }
}

export default AttractionsHome;