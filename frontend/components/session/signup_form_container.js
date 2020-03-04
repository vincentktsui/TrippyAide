import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'signup',
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));