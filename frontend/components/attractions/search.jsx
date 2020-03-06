import React from 'react';
import AttractionsMap from './attractions_map';
import AttractionsIndex from './attractions_index';
// import FilterForm from './filter_form';

const Search = (props) => {
    // 
    return (
        <div className="full-map-container">
            <AttractionsIndex 
                attractions={props.attractions} 
                fetchAttractions={props.fetchAttractions}/>
            <AttractionsMap 
                attractions={props.attractions}
                updateFilter={props.updateFilter}
                type="dynamic"/>
        </div>
    )
}

export default Search;