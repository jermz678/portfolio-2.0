import React from 'react';

function Header(){
    return (
        <header>
            <h1 className="name">Jeremiah McKinney</h1>
            <nav className="navigation">
                <ul className="list">
                    <li> <a href="#about-me">About Me</a></li>
                    <li> <a href="#work">My Work</a></li>
                    <li> <a href="#contact-me">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;