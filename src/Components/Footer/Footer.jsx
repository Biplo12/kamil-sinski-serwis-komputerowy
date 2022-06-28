import React from "react";
import { HashLink } from "react-router-hash-link";

import location from "../../Assets/Images/Conact/Icons/location.png";
import phone from "../../Assets/Images/Conact/Icons/phone.png";
import mail from "../../Assets/Images/Conact/Icons/mail.png";
import facebook from "../../Assets/Images/Conact/Icons/facebook.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content footer-section">
          <h1>O MNIE?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quas
            laborum odio placeat voluptates dolores a quaerat enim error
            voluptas? Quia eos, mollitia autem enim similique dicta eius facere
            sunt.
          </p>
        </div>
        <div className="footer-links footer-section">
          <h1>Przydatne linki</h1>
          <ul>
            <li>
              <HashLink to="/#strona-glowna">
                <span className="un">Strona główna</span>
              </HashLink>
            </li>
            <li>
              <HashLink to="/#dlaczego-ja">
                <span className="un">Dlaczego ja?</span>
              </HashLink>
            </li>
            <li>
              <HashLink to="/#o-mnie">
                <span className="un">O mnie</span>
              </HashLink>
            </li>
            <li>
              <HashLink to="/#nasze-uslugi">
                <span className="un">Nasze usługi</span>
              </HashLink>
            </li>
            <li>
              <HashLink to="/#kontakt">
                <span className="un">Kontakt</span>
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-contact footer-section">
          <h1>Kontakt</h1>
          <ul>
            <li>
              <img src={location} alt="location icon" />
              <a
                href="https://www.google.pl/maps/place/Karbowska+13,+41-923+Bytom/@50.3578451,18.8591928,17z/data=!3m1!4b1!4m5!3m4!1s0x47112cfa55b42dc3:0xd481eac55e6a9cd6!8m2!3d50.3578417!4d18.8613815"
                target={"_blank"}
              >
                <span className="un">
                  <span>Bytom,</span> Karbowska 13/1, 41-923
                </span>
              </a>
            </li>
            <li>
              <img src={phone} alt="location icon" />
              <a href="callto:513292132">
                <span className="un">+48 513 292 132</span>
              </a>
            </li>
            <li>
              <img src={mail} alt="location icon" />
              <a href="mailto:kamilsinskiserwis@gmail.com">
                <span className="un">kamilsinskiserwis@gmail.com</span>
              </a>
            </li>
            <li>
              <img src={facebook} alt="location icon" />
              <a
                href="https://www.facebook.com/kamilsinskiserwis"
                target={"_blank"}
              >
                <span className="un">/kamilsinskiserwis</span>
              </a>
            </li>
            <li>
              <a>
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-footer">
        <p>Copyright © 2022 - Kamil Siński - Serwis Komputerowy</p>
      </div>
    </>
  );
};

export default Footer;
