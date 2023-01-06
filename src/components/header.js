import React from 'react';

function Header() {

    return (
        <div className="header-section">
            <div className="header-frame">
                <h1>Michael McGraw</h1>
                <h2>Full Stack Web Developer in Lexington, KY</h2>
            </div>
            <div className="img-frame">
                <img id="propic" src={require("../images/sqaure_headshot.jpg")} alt=""></img>
            </div>
        </div>
    )
}

export default Header;