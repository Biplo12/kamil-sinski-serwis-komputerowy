import React from "react";
import logoSmall from "../../Assets/Images/logo-sm.png";
import { Link } from "react-router-dom";
import closeIcon from "../../Assets/Icons/close.svg";
import menuIcon from "../../Assets/Icons/menu.svg";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logoSmall} alt="navbar logo" />
      </div>
      <nav>
        <ul>
          <li>
            <span className="un">
              <Link to="/">Strona główna</Link>
            </span>
          </li>
          <li>
            <span className="un">
              <Link to="/">Dlaczego Ja?</Link>
            </span>
          </li>
          <li>
            <span className="un">
              <Link to="/">O mnie</Link>
            </span>
          </li>
          <li>
            <span className="un">
              <Link to="/">Nasze usługi</Link>
            </span>
          </li>
          <li>
            <span className="un">
              <Link to="/">Kontakt</Link>
            </span>
          </li>
          <li>
            <img src={menuIcon} alt="menu icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
