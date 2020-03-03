import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'signup',
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));