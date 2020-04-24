import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesNav = (props) => {
    return (
        <nav className="features-nav">
            <Link to={`/${localStorage.city}/attractions`}>
                <div >
                    <span className="fa fa-binoculars"></span>
                    <span>Attractions</span>
                </div>
            </Link>
            <Link to={`/${localStorage.city}/hotels`}>
                <div>
                    <span className="fa fa-bed"></span>
                    <span>Hotels</span>
                </div>
            </Link>
        </nav>
    )
}

export default FeaturesNav;