import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  //This is for updating the state of the click
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //This is going to change the click state, if state is false then it is true vice versa
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* link is a part of react-dom-router package, normally it would be an a tag  */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            DISCOVER PITTSBURGH BEER <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
