import { connect } from 'react-redux';
import { fetchAttractions } from '../../actions/attraction_actions';
import AttractionsHome from './attractions_home';


const mapStateToProps = ({ entities }) => ({
    attractions: entities.attractions,
});

const mapDispatchToProps = dispatch => ({
    fetchAttractions: () => dispatch(fetchAttractions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttractionsHome);