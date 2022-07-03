import React from "react";

import customShape from "../../Assets/Images/Conact/Image/custom-shape.png";
import location from "../../Assets/Images/Conact/Icons/location.png";
import phone from "../../Assets/Images/Conact/Icons/phone.png";
import mail from "../../Assets/Images/Conact/Icons/mail.png";
import facebook from "../../Assets/Images/Conact/Icons/facebook.png";
const Contact = () => {
  return (
    <div className="contact-container" id="kontakt">
      <h1>
        ZAPYTAJ O <span>WYCENE</span>
      </h1>
      <div className="contact-card">
        <div className="contact-inner-card">
          <div className="inner-card-label">
            <img src={customShape} alt="custom ellipse" />
            <div className="inner-card-content">
              <h2>Kontakt</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas dignissimos molestiae mollitia quam error tempore.
              </p>
            </div>
          </div>
          <div className="inner-card-info">
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
            </ul>
          </div>
        </div>
        <div className="contact-card-form-container">
          <div className="contact-card-form">
            <div className="input-container name">
              <input type="text" placeholder="Imię" id="name" required />
              <label className="input-label" htmlFor="name">
                Imię
              </label>
            </div>
            <div className="input-container email">
              <input type="email" placeholder="email" id="email" required />
              <label className="input-label" htmlFor="email">
                E-mail
              </label>
            </div>
            <div className="input-container phone">
              <input
                type="phone"
                placeholder="Numer telefonu(opcjonalne)"
                id="phone"
                required
              />
              <label className="input-label" htmlFor="phone">
                Numer telefonu (opcjonalne)
              </label>
            </div>
            <div className="input-container topic">
              <input type="text" placeholder="Temat" id="topic" required />
              <label className="input-label" htmlFor="topic">
                Temat
              </label>
            </div>
            <div className="input-container message">
              <input
                type="text"
                placeholder="Treść wiadomości"
                id="message"
                required
              />
              <label className="input-label" htmlFor="message">
                Treść wiadomości
              </label>
            </div>
            <button type="submit">Wyślij</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
