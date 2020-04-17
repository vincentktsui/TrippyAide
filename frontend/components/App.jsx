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
import SplashContainer from './splash_container';
import AttractionReviewFormContainer from './attractions/attraction_review_form_container';

const App = () => (
    <div>
        <header className="nav-bar-outer">
            <NavBarContainer />
        </header>
        <Route exact path="/" component={SplashContainer}/>
        <div className="main-content">
            <Switch>
            <Route path="/attractions/:attractionId(\d+)/review" component={AttractionReviewFormContainer} />
            <Route path="/attractions/:attractionId(\d+)" component={ShowContainer} />
            <Route path="/attractions" component={AttractionHomeContainer} />
            </Switch>
            <Route path="/attractions/map" component={SearchContainer} />
            <AuthRoute path="/:url?/:id?/:review?/login" component={LoginFormContainer} />
            <AuthRoute path="/:url?/:id?/:review?/signup" component={SignupFormContainer} />
        </div>
        <footer>

        </footer>
    </div>
);

export default App;