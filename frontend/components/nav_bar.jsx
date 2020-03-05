import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let path = props.location.pathname;
    if (path.charAt(path.length - 1) === '/') {
        path = path.substring(0, path.length - 1);
    }
    const display = (props.currentUser) ? (
        <div className="avatar"
            onClick={() => {$('.user-dropdown').toggleClass("hidden")}}>
            <div className="avatar-container">
                <img src={window.avatarURL}/>
            </div>
            <div className="user-dropdown hidden">
                <ul>
                    <li>
                        <Link className='avatar-link'>View Profile</Link>    
                    </li>
                    <li>
                        <Link to="/">
                            <button onClick={props.logout}>Sign Out</button>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    ) : (
            <Link to={`${path}/signup`}>
                <button className="join">JOIN</button>
            </Link>
        )

    return (
        <nav className="nav-bar-inner">
            <div className="nav-left">
                <h1>
                    <Link to="/">
                        <div className="logo-container">
                            <img src={window.logoURL}/>
                        </div>
                    </Link>
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
                {display}
            </div>

        </nav>
    );
};

export default NavBar;