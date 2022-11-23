import React from 'react';

function Header() {

    return (
        <div className="header-section">
            <div className="header-frame">
                <h1>Michael McGraw</h1>
                <h2>Full Stack Web Developer in Lexington, KY</h2>
                <h3>Thanks for visiting, my site is still a work in progress. I plan to have it fully finished by mid-December. In the meantime, please get in touch with me on <a href="https://www.linkedin.com/in/michaelmcgraw09/">LinkedIn</a> </h3>
            </div>
            <div className="img-frame">
                <img id="propic" src={require("./images/mcgraw-michael.jpg")} alt=""></img>
            </div>
        </div>
    )
}

export default Header;