import React from 'react';
import { Link } from 'react-router-dom';


function Nav(){
    return (
        
            <nav className="navigation">
                <ul className="list">
                <Link to="/">  <li className="navList"> About Me</li> </Link>
                <Link to="/myWork">   <li className="navList"> My Work</li> </Link>
                <Link to="/Contact">   <li className="navList"> Contact Me</li> </Link>
                <Link to="/Resume">   <li className="navList"> Resume</li> </Link>
                </ul>
            </nav>
        
    )
}
export default Nav;
