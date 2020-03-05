import { connect } from 'react-redux';
import Search from './search';
import { fetchAttractions } from '../../actions/attraction_actions';
import { updateFilter } from '../../actions/filter_actions';
// import BenchIndex from './bench_index';


const mapStateToProps = ({ entities, ui }) => ({
    attractions: entities.attractions,
});

const mapDispatchToProps = dispatch => ({
    fetchAttractions: () => dispatch(fetchAttractions()),
    // filterBounds: (bounds) => dispatch(filterBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});


// connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
export default connect(mapStateToProps, mapDispatchToProps)(Search);