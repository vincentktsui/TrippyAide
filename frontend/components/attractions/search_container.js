import { connect } from 'react-redux';
import Search from './search';
import { fetchAttractions } from '../../actions/attraction_actions';
import { updateFilter, updateMapFilter } from '../../actions/filter_actions';


const mapStateToProps = ({ entities, ui }) => {
    const filtered = Object.keys(entities.attractions).filter(key => ui.mapAttractions.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: entities.attractions[key]
            };
        }, {});
        
    return {
        attractions: filtered,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAttractions: () => dispatch(fetchAttractions()),
    // filterBounds: (bounds) => dispatch(filterBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateMapFilter: (filter, value) => dispatch(updateMapFilter(filter, value))
});


// connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
export default connect(mapStateToProps, mapDispatchToProps)(Search);