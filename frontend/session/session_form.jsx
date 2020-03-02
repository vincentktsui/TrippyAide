import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render() {
        const text = (this.props.formType === '/signup') ? "Log In" : "Sign Up";
        const opp = (this.props.formType === '/login') ? "Log In" : "Sign Up";
        // debugger
        const errors = this.props.errors.map((error) => {
            return <li key={Math.random()}>{error}</li>;
        })
        return (
            <div className="session-form">
                <header>
                    <h2>Welcome to BenchBnB!</h2>
                    <h2 >{text}!</h2>
                    <div>
                        <Link className="link-button" to={this.props.formType}>{opp} instead</Link>
                    </div>
                </header>
                <ul>
                    {errors}
                </ul>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')} />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>{text}</button>
                </form>
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