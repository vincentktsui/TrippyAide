import React from 'react';
import AttractionsMap from './attractions_map';
import AttractionsIndex from './attractions_index';
// import FilterForm from './filter_form';

const Search = (props) => {
    // 
    return (
        <div>
            <AttractionsMap 
                attractions={props.attractions}
                updateFilter={props.updateFilter}/>
            <AttractionsIndex 
                attractions={props.attractions} 
                fetchAttractions={props.fetchAttractions}/>
        </div>
    )
}

export default Search;