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
        {navbarOnScroll && (
          <div className="navbar-logo">
            <img src={herologo} alt="navbar logo" height="55px" />
          </div>
        )}
      </HashLink>
      <nav>
        <ul>
          <li onClick={handleNavbar}>
            <span className="un">
              <HashLink to="/#strona-glowna">Strona główna</HashLink>
            </span>
          </li>
          <li onClick={handleNavbar}>
            <span className="un">
              <HashLink to="/#dlaczego-ja">Dlaczego ja?</HashLink>
            </span>
          </li>
          <li onClick={handleNavbar}>
            <span className="un">
              <HashLink to="/#o-mnie">O mnie</HashLink>
            </span>
          </li>
          <li onClick={handleNavbar}>
            <span className="un">
              <HashLink to="/#nasze-uslugi">Nasze usługi</HashLink>
            </span>
          </li>
          <li onClick={handleNavbar}>
            <span className="un">
              <HashLink to="/#kontakt">Kontakt</HashLink>
            </span>
          </li>
          <li className="mobile-menu-icon" onClick={handleNavbar}>
            <svg width="32" height="32" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
