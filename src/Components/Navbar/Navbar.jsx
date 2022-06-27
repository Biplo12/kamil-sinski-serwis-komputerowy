import { useState } from "react";
import herologo from "../../Assets/Images/Navbar/logo-small.png";

import { Link } from "react-router-dom";
import closeIcon from "../../Assets/Icons/close.svg";
import menuIcon from "../../Assets/Icons/menu.svg";
const Navbar = () => {
  //Mobile navbar state
  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleNavbar = () => setNavbarOpen(!navbarOpen);

  //onSroll style change
  const [navbarOnScroll, setNavbarOnScroll] = useState(false);
  const changePosition = () => {
    if (window.scrollY >= 90) {
      setNavbarOnScroll(true);
    } else {
      setNavbarOnScroll(false);
    }
  };
  window.addEventListener("scroll", changePosition);

  return (
    <div
      className={[
        navbarOpen ? "navbar-container" : "navbar-container mobile",
        navbarOnScroll ? " onScroll" : "",
      ].join("")}
    >
      <div className="navbar-logo">
        <img src={herologo} alt="navbar logo" height="55px" />
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
              <Link to="/">Dlaczego ja?</Link>
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
          <li className="mobile-menu-icon" onClick={handleNavbar}>
            <img src={navbarOpen ? menuIcon : closeIcon} alt="menu icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
