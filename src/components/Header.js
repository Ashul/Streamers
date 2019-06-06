import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () =>{
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            {/* <!-- Brand --> */}
            <Link to="/" className="navbar-brand">Navbar</Link>

            {/* <!-- Toggler/collapsibe Button --> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* <!-- Navbar links --> */}
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/" className="nav-link" href="#">Streamy</Link>
            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link" href="#">All Streams</Link>
            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link" href="#">
            <GoogleAuth/>
            </Link>
            </li> 
            </ul>
            </div> 
            </nav>
        </div>
    )
}
export default Header;
