import React from "react";
import { Switch, Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './nav_bar_container';
import AttractionsIndexContainer from './attractions/attractions_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header className="nav-bar-outer">
            <NavBarContainer />
        </header>
        <div className="main-content">
            <Route exact path="/attractions" component={AttractionsIndexContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
        <footer>

        </footer>
    </div>
);

export default App;