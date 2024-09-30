import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (<div id="nav-bar">
                <Link to='/' className="nav-field">Home</Link>
                <Link to='/movies/add' className="nav-field">Add</Link>
                <Link to='/about' className="nav-field">About</Link>
                <Link to='/contactUs' className="nav-field">Contact us</Link>
            </div>
    );
}
export default NavBar;
