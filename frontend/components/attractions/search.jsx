import React from 'react';
import AttractionsMap from './attractions_map';
import AttractionsIndex from './attractions_index';
// import FilterForm from './filter_form';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {hovered: undefined}
    }

    indexHover(id) {
        this.setState({hovered: id});
    }

    removeHover() {
        this.setState({hovered: undefined});
    }
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        // debugger
        document.body.style.overflow = 'unset';
    }
    render() {
        return (
            <div className="full-map-container">
            <AttractionsIndex 
                attractions={this.props.attractions} 
                fetchAttractions={this.props.fetchAttractions}
                indexHover={this.indexHover.bind(this)}
                removeHover={this.removeHover.bind(this)}/>
            <AttractionsMap 
                attractions={this.props.attractions}
                updateFilter={this.props.updateFilter}
                type="dynamic"
                hovered={this.state.hovered}/>
        </div>
        )
    }

} 



export default Search;