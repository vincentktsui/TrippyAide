import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render() {
        const emailplaceholder = (this.props.formType === 'signup') ? 
            "Email (valid emails only)" : '';
        const passwordplaceholder = (this.props.formType === 'signup') ? 
            "Password (minimum 6 characters)" : '';
        const passwordprompt = (this.props.formType === 'signup') ?
            "Create a password" : "Password";
        const header = (this.props.formType === 'login') ? 
            "Welcome back - log in!" : "Join now - it's free!";
        const footer = (this.props.formType === 'login') ? 
            "Don't have an account? " : "Already have an account? "
        const buttontext = (this.props.formType === 'login') ? "Log In" : "Join";
        const link = (this.props.formType === 'login') ? "/signup" : "/login";
        const opp = (this.props.formType === 'signup') ? "Log In" : "Sign Up";
        // debugger
        let stripped = this.props.match.url.split('/');
        stripped.pop();
        stripped = stripped.join('/');
        const errors = this.props.errors.map((error) => {
            return <li key={Math.random()}>{error}</li>;
        })
        return (
            <div className="modal">
                <div className="modal-screen"></div>
                <div className="modal-form">
                    <Link to={stripped}>
                        <button className="ui-close">&times;</button>
                    </Link>
                    <div className="session-inner">
                        <header>
                            <img src="/assets/login.svg" />
                        </header>
                        <ul>
                            {errors}
                        </ul>
                        <form className="session-form">
                            <div className="session-header">
                                {header}
                            </div>
                            <label htmlFor='session-email'>Email address</label> 
                            <br/>
                            <input
                                id="session-email"
                                type="text" 
                                placeholder={emailplaceholder}
                                value={this.state.email}
                                onChange={this.handleInput('email')} />
                            <br/>
                            <label htmlFor='session-password'>{passwordprompt}</label>
                            <br/>
                            <input
                                id="session-password"
                                type="password"
                                placeholder={passwordplaceholder}
                                value={this.state.password}
                                onChange={this.handleInput('password')} />
                            <br/>
                            <button 
                                onClick={this.handleSubmit}
                                className="session-button">{buttontext}</button>
                            <footer>
                                {footer}
                                <span><Link className="session-link" to={link}>{opp}</Link></span>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }
    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
}

export default SessionForm;