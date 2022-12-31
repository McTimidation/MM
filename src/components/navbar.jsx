import React from 'react';

function NavBar( { setState } ) {
    return(
        <nav className="navbar">
            <div className="container">
                <button className="btn btn-outline-light" onClick={() => 
                {setState('bio')}}>About Me</button>
                <button className="btn btn-outline-light" onClick={() => 
                {setState('portfolio')}}>Portfolio</button>
                <button className="btn btn-outline-light" onClick={() => 
                {setState('contact')}}>Get in Touch</button>
            </div>
        </nav>
    )
}

export default NavBar;