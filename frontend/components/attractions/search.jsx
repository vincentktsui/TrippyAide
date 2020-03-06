import React from 'react';
import AttractionsMap from './attractions_map';
import AttractionsIndex from './attractions_index';
// import FilterForm from './filter_form';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

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
                fetchAttractions={this.props.fetchAttractions}/>
            <AttractionsMap 
                attractions={this.props.attractions}
                updateFilter={this.props.updateFilter}
                type="dynamic"/>
        </div>
        )
    }

} 



export default Search;