import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => {
            debugger
            let stripped = props.match.url.split('/');
            stripped.pop();
            stripped = stripped.join('/');
            if (stripped === '') {
                stripped = '/';
            }
            return (
                !loggedIn ? <Component {...props} /> : <Redirect to={stripped} />
            )
        }
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);



const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
);

