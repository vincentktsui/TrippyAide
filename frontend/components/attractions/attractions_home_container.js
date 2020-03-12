import { connect } from 'react-redux';
import { fetchAttractions } from '../../actions/attraction_actions';
import { updateFilter } from '../../actions/filter_actions';
import AttractionsHome from './attractions_home';


const mapStateToProps = ({ entities }) => ({
    attractions: entities.attractions,
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    // removeFilter: (filter, value) => dispatch(removefilter(filter, value)),
    // fetchAttractions: () => dispatch(fetchAttractions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttractionsHome);