import { connect } from 'react-redux';
import Show from './show';
import { fetchAttraction, clearAttraction } from '../../actions/attraction_actions';
// import { updateFilter } from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, ui, session }) => {
    const filtered = Object.keys(entities.attractions).filter(key => ui.showAttractions.includes(key))
        .reduce((obj, key) => {
            return {
                ...obj,
                [key]: entities.attractions[key]
            };
        }, {});
        
    return {
        attractions: filtered,
        show: ui.attraction,
        reviews: entities.reviews,
        loading: ui.loading,
        loggedIn: session.id,
    };

};

const mapDispatchToProps = dispatch => ({
    fetchAttraction: (id) => dispatch(fetchAttraction(id)),
    clearAttraction: () => dispatch(clearAttraction()),
    // filterBounds: (bounds) => dispatch(filterBounds(bounds)),
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});


// connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show));