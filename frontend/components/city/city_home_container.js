import { connect } from 'react-redux';
import CityHome from './city_home';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';
import { fetchAttractions } from '../../actions/attraction_actions';
import { fetchHotels } from '../../actions/hotel_actions';

const mapStateToProps = state => ({
    filters: state.ui.filters,
})

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchAttractions: filters => dispatch(fetchAttractions(filters)),
    fetchHotels: () => dispatch(fetchHotels()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CityHome));