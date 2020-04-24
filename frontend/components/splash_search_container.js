import { connect } from 'react-redux';
import SplashSearch from './splash_search';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../actions/filter_actions';


const mapStateToProps = ({ entities, session }) => ({
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default withRouter(connect(null, mapDispatchToProps)(SplashSearch));