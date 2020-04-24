import { connect } from 'react-redux';
import { fetchHotels } from '../../actions/hotel_actions';
import { updateFilter, updateHomeFilter } from '../../actions/filter_actions';
import HotelsHome from './hotels_home';


const mapStateToProps = ({ entities, ui }) => {
    return {
        hotels: entities.hotels,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchHotels: () => dispatch(fetchHotels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotelsHome);