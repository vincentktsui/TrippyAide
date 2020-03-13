import React from 'react';
import { Link } from 'react-router-dom';

const SplashSearch = () => {
    return (
        <div className='splash-search'>
            <ul>
                <li><input type="text" placeholder="Where to?"/></li>
                <Link to="/attractions"><li>All</li></Link>
            </ul>
        </div>
    )
};

export default SplashSearch;