import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const display = (props.currentUser) ? (
        <div>
            <p>Welcome, {props.currentUser.displayName}</p>
            <button onClick={props.logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link
                    className="link-button"
                    to={`${props.match.url}/signup`}>Sign Up
            </Link> or <Link
                    className="link-button"
                    to={`${props.match.url}/login`}>Log In
            </Link>
            </div>
        )
    let path = props.match.url;
    if (path.charAt(path.length-1) === '/') {
        path = path.substring(0, path.length-1);
    }
    return (
        <nav className="nav-bar-inner">
            <div className="nav-left">
                <h1>
                    <div className="logo-container">
                        <a href="#">
                            <img src="/assets/logo.svg"/>
                        </a>
                    </div>
                </h1>
                <div className="search-bar">
                    <form>
                        <input type="search"/>    
                    </form>
                </div>
            </div>

            <div className="nav-right">
                <ul>

                </ul>
                <Link to={`${path}/signup`}>
                    <button>JOIN</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;