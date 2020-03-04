import { connect } from 'react-redux';
import AttractionsIndex from './attractions_index';
import { fetchAttractions } from '../../actions/attraction_actions';


const mapStateToProps = ({ entities }) => ({
    attractions: entities.attractions,
});

const mapDispatchToProps = dispatch => ({
    fetchAttractions: () => dispatch(fetchAttractions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttractionsIndex);