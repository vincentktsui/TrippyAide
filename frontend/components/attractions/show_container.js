import { connect } from 'react-redux';
import Show from './show';
import { fetchAttraction } from '../../actions/attraction_actions';
// import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = ({ entities, ui }) => ({
    attractions: entities.attractions,
    show: ui.attraction
});

const mapDispatchToProps = dispatch => ({
    fetchAttraction: () => dispatch(fetchAttraction()),
    // filterBounds: (bounds) => dispatch(filterBounds(bounds)),
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});


// connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
export default connect(mapStateToProps, mapDispatchToProps)(Show);