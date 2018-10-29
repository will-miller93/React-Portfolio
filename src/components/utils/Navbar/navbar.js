import React from 'react';

const Navbar = () => (
    <div>
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Will M. Miller</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a >About</a></li>
                    <li><a >Gallery</a></li>
                    <li><a >Technologies</a></li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Navbar;