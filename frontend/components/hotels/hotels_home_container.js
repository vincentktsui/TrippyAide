import { connect } from 'react-redux';
import { fetchAttractions } from '../../actions/attraction_actions';
import { updateFilter, updateHomeFilter } from '../../actions/filter_actions';
import HotelsHome from './hotels_home';


const mapStateToProps = ({ entities, ui }) => {
    return {
        hotels: entities.hotels,
    };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HotelsHome);