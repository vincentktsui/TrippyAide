import React from 'react';
import AttractionsIndexItem from './attractions_index_item';
import { Link } from 'react-router-dom';

class AttractionsHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            page: 1,
            all: true, 
            categories: {
                'Sights & Landmarks': true,
                'Nature & Parks': true,
                'Museums': true,
                'Zoos & Aquariums': true,
                'Amusement Parks': true,
            }
        };
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        // this.toggleAll = this.toggleAll.bind(this);
    }
    componentDidMount() {
        this.props.updateFilter("bounds", {} );
        window.scrollTo({ top: 0 });
    }

    toggleAll() {
        return (e) => {
            const state = Object.assign({}, this.state);
            if (!e.target.checked) {
                state.categories = {
                    'Sights & Landmarks': false,
                    'Nature & Parks': false,
                    'Museums': false,
                    'Zoos & Aquariums': false,
                    'Amusement Parks': false,
                }
                state.all = false;
            }
            else {
                state.categories = {
                    'Sights & Landmarks': true,
                    'Nature & Parks': true,
                    'Museums': true,
                    'Zoos & Aquariums': true,
                    'Amusement Parks': true,
                }
                state.all = true;
            }
            state.page = 1;
            this.setState(state);
        }
    }
    onCategory(category) {
        return (e) => {
            const state = Object.assign({}, this.state);
            
            if (e.target.checked) {
                state.categories[category] = true;
            }
            else {
                state.categories[category] = false;
            }
            if (Object.values(state.categories).every(val => val)) {
                state.all = true;
            }
            else {
                state.all = false;
            }
            state.page = 1;
            this.setState(state);
        }
    }


    nextPage() {
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
        const attractions = Object.values(this.props.attractions)
        .filter( attraction => (
            attraction.categories.some( cat => this.state.categories[cat])
            ))
            .sort( (a,b) => b.avg_rating - a.avg_rating)
            .slice((this.state.page - 1) * 20, this.state.page * 20)
            .map(attraction => <AttractionsIndexItem key={attraction.id}
                attraction={attraction} 
                indexHover={() => (undefined)}
                removeHover={()=>(undefined)}/>);
        const nextdisabled = (this.state.page >= Math.floor(
            attractions.length / 20) + 1) ? true : false;
        const prevdisabled = (this.state.page <= 1) ? true : false;
        return (
            <div className='home-outer'>
                <h1>Attractions</h1>
                <div className='map-button'>
                <Link to="/attractions/map">
                    <button className='black-button'>View Map</button>
                </Link>

                </div>
                <div className="attractions-home">
                    <aside className="filters">
                        <div>
                            <input 
                            type="checkbox"
                            checked={this.state.all}
                            onChange={this.toggleAll()}
                            /><span>All</span>
                        </div>
                        <div>
                            <input 
                            type="checkbox" 
                            checked={this.state.categories['Sights & Landmarks']}
                            onChange={this.onCategory('Sights & Landmarks')}
                            /><span>{'Sights & Landmarks'}</span>
                            {/* <ul>
                                <li><input type="checkbox" /><span>{'Landmarks'}</span></li>
                                <li><input type="checkbox" /><span>{'Architectural Buildings'}</span></li>
                                <li><input type="checkbox" /><span>{'Monuments & Statues'}</span></li>
                                <li><input type="checkbox" /><span>{'Historic Sites'}</span></li>
                                <li><input type="checkbox" /><span>{'Sacred & Religious Sites'}</span></li>
                            </ul> */}
                        </div>
                        <div>
                            <input type="checkbox"
                            checked={this.state.categories['Nature & Parks']}
                            onChange={this.onCategory('Nature & Parks')}
                            /><span>{'Nature & Parks'}</span>
                            {/* <ul>
                                <li><input type="checkbox" /><span>{'Parks'}</span></li>
                                <li><input type="checkbox" /><span>{'Beaches'}</span></li>
                            </ul> */}
                        </div>
                        <div>
                            <input type="checkbox"
                            checked={this.state.categories['Museums']} 
                            onChange={this.onCategory('Museums')}
                            /><span>{'Museums'}</span>
                        </div>
                        <div>
                            <input type="checkbox"
                            checked={this.state.categories['Zoos & Aquariums']}
                            onChange={this.onCategory('Zoos & Aquariums')}
                            /><span>{'Zoos & Aquariums'}</span>
                            {/* <ul>
                                <li><input type="checkbox" /><span>{'Zoos'}</span></li>
                                <li><input type="checkbox" /><span>{'Aquariums'}</span></li>
                            </ul> */}
                        </div>
                        <div>
                            <input type="checkbox"
                            checked={this.state.categories['Amusement Parks']}
                            onChange={this.onCategory('Amusement Parks')}
                            /><span>{'Amusement Parks'}</span>
                        </div>
                        {/* <div>
                            <input type="checkbox" />{'Rating'}
                            <ul>
                                <li><input type="checkbox" />{'5'}</li>
                                <li><input type="checkbox" />{'4'}</li>
                                <li><input type="checkbox" />{'3'}</li>
                                <li><input type="checkbox" />{'2'}</li>
                                <li><input type="checkbox" />{'1'}</li>
                            </ul>
                        </div> */}
                    
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