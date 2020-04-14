import { connect } from 'react-redux';
import { fetchAttractions } from '../../actions/attraction_actions';
import { updateFilter, updateHomeFilter } from '../../actions/filter_actions';
import AttractionsHome from './attractions_home';


const mapStateToProps = ({ entities, ui }) => {
    const filtered = Object.keys(entities.attractions).filter( key => ui.homeAttractions.includes(key))
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
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateHomeFilter: (filter, value) => dispatch(updateHomeFilter(filter, value))
    // removeFilter: (filter, value) => dispatch(removefilter(filter, value)),
    // fetchAttractions: () => dispatch(fetchAttractions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttractionsHome);