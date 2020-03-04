import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'login',
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));