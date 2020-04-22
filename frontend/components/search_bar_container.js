import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session }) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(null, null)(SearchBar));