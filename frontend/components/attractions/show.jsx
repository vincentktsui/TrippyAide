import React from 'react';
import AttractionsMap from './attractions_map';
import AttractionsShow from './attractions_show';
// import FilterForm from './filter_form';

const Show = (props) => {
    // 
    return (
        <div>
            <AttractionsShow
                // attractions={props.attractions}
                fetchAttraction={props.fetchAttraction}
                show={props.show} />
            {/* <AttractionsMap
                type="static"
                attractions={props.attractions}
                show={props.show}
                updateFilter={props.updateFilter} /> */}
        </div>
    )
}

export default Show;