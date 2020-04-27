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
        this.demoLogin = this.demoLogin.bind(this);
    }
    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    demoLogin(e) {
        e.preventDefault();
        const user = {email: 'demouser@aa.io', password:'demouser'};
        this.props.demoLogin(user);
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
        const opp = (this.props.formType === 'signup') ? "Log In" : "Sign Up";
        // 
        const temp = (this.props.match.params.url) ? 
            (this.props.match.params.url) : '';
        const id = (this.props.match.params.id) ? '/'+(this.props.match.params.id) : '';
        const review = (this.props.match.params.review) ? '/review' : '';
        const closeurl = '/' + temp + id + review; 
        let stripped = this.props.match.url.split('/');
        stripped.pop();
        stripped = stripped.join('/');
        const link = (this.props.formType === 'login') ? stripped+"/signup"
            : stripped+"/login";


        //errors
        const emailerrorstrings = this.props.errors.filter( 
            (error) => error.toLowerCase().includes("email"));
        const passworderrorstrings = this.props.errors.filter( 
            (error) => error.toLowerCase().includes("password"));
        const emailerrors = emailerrorstrings.map((error) => {
            return <li key={Math.random()}>{error}</li>;
        });
        const passworderrors = passworderrorstrings.map((error) => {
            return <li key={Math.random()}>{error}</li>;
        });
        const emailerrorsdiv = (emailerrors.length === 0) ? (
                <div className="session-errors email hidden">
                    <ul>
                        {emailerrors}
                    </ul>
                </div>) : (
                <div className="session-errors email">
                    <ul>
                        {emailerrors}
                    </ul>
                    <div className="triangle"></div>
                </div>
                );
        const passworderrorsdiv = 
        (passworderrors.length === 0 || emailerrors.length !== 0) ? (
                <div className="session-errors password hidden">
                    <ul>
                        {passworderrors}
                    </ul>
                </div>) : (
                <div className="session-errors password">
                    <ul>
                        {passworderrors}
                    </ul>
                    <div className="triangle"></div>
                </div>
                );

        // 
        return (
            <div className="modal">
                <div className="modal-screen"></div>
                <div className="modal-form">
                    <Link to={closeurl}>
                        <button className="ui-close">&times;</button>
                    </Link>
                    <div className="session-inner">
                        <header>
                            <img src={window.logoURL} />
                        </header>
                        {emailerrorsdiv}
                        {passworderrorsdiv}
                        <form className="session-form">
                            <div className="session-header">
                                {header}
                            </div>
                            <label htmlFor='session-email'>Email address</label> 
                            <br/>
                            <input
                                id="session-email"
                                type="text" 
                                className={(emailerrors.length !== 0) ?
                                    "errors-highlight" : ""}
                                placeholder={emailplaceholder}
                                value={this.state.email}
                                onChange={this.handleInput('email')} />
                            <br/>
                            <label htmlFor='session-password'>{passwordprompt}</label>
                            <br/>
                            <input
                                id="session-password"
                                type="password"
                                className={(passworderrors.length !== 0 && 
                                    emailerrors.length === 0) ? 
                                    "errors-highlight" : ""}
                                placeholder={passwordplaceholder}
                                value={this.state.password}
                                onChange={this.handleInput('password')} />
                            <br/>
                            <button 
                                onClick={this.handleSubmit}
                                className="session-button">{buttontext}</button>
                            <footer>
                                {footer}
                                <span><Link className="session-link" 
                                to={link}>{opp}</Link></span>
                            </footer>
                            <footer>
                                Want to try it out?&nbsp;
                                <button className="demo" 
                                onClick={this.demoLogin}>Demo</button>
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
        // 
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
}

export default SessionForm;