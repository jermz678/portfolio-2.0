import React from 'react';

function Nav(){
    return (
        <header>
            <nav className="navigation">
                <ul className="list">
                    <li> <a href="#about-me">About Me</a></li>
                    <li> <a href="#work">My Work</a></li>
                    <li> <a href="#contact-me">Contact Me</a></li>
                    <li> <a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav;
