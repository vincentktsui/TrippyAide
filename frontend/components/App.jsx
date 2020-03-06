import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './nav_bar_container';
// import AttractionsIndexContainer from './attractions/attractions_index_container';
import SearchContainer from './attractions/search_container';
import ShowContainer from './attractions/show_container';
import AttractionHomeContainer from './attractions/attractions_home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header className="nav-bar-outer">
            <NavBarContainer />
        </header>
        <div className="main-content">
            <Route exact path="/" render={ props => {
                return (
                    <Link to="/attractions">Attractions</Link>
                )
            }} />
            <Route path="/attractions" component={AttractionHomeContainer}/>
            <Switch>
                <Route path="/attractions/map" component={SearchContainer} />
                <Route path="/attractions/:attractionId" component={ShowContainer} />
            </Switch>
            <Link to="/attractions"></Link>
            <AuthRoute path="/:url?/login" component={LoginFormContainer} />
            <AuthRoute path="/:url?/signup" component={SignupFormContainer} />
        </div>
        <footer>

        </footer>
    </div>
);

export default App;