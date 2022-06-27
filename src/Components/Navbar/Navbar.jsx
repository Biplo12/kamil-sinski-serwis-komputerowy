import { useState } from "react";
import herologo from "../../Assets/Images/Navbar/logo-small.png";

import { HashLink } from "react-router-hash-link";
import closeIcon from "../../Assets/Images/Navbar/close.svg";
import menuIcon from "../../Assets/Images/Navbar/menu.svg";
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
      <HashLink to="/#strona-glowna">
        <div className="navbar-logo">
          <img src={herologo} alt="navbar logo" height="55px" />
        </div>
      </HashLink>
      <nav>
        <ul>
          <li>
            <span className="un">
              <HashLink to="/#strona-glowna">Strona główna</HashLink>
            </span>
          </li>
          <li>
            <span className="un">
              <HashLink to="/#dlaczego-ja">Dlaczego ja?</HashLink>
            </span>
          </li>
          <li>
            <span className="un">
              <HashLink to="/#o-mnie">O mnie</HashLink>
            </span>
          </li>
          <li>
            <span className="un">
              <HashLink to="/#nasze-uslugi">Nasze usługi</HashLink>
            </span>
          </li>
          <li>
            <span className="un">
              <HashLink to="/#kontakt">Kontakt</HashLink>
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
