import React from "react";
import Service from "./Service";
import clock from "../../Assets/Images/Services/icons/clock.png";
import motherboard from "../../Assets/Images/Services/icons/motherboard.png";
import questionMark from "../../Assets/Images/Services/icons/question-mark.png";
import repairKit from "../../Assets/Images/Services/icons/repair-kit.png";
import virus from "../../Assets/Images/Services/icons/virus.png";
import windows from "../../Assets/Images/Services/icons/windows.png";

const Services = () => {
  return (
    <div className="services-container" id="nasze-uslugi">
      <h1>
        NASZE <span>USŁUGI</span>
      </h1>
      <div className="services-columns">
        <Service
          icon={clock}
          serviceTitle="Konserwacja laptopów i komputerów"
          serviceText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          facere est molestiae voluptates recusandae consectetur"
        />
        <Service
          icon={questionMark}
          serviceTitle="Doradztwo komputerowe"
          serviceText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            facere est molestiae voluptates recusandae consectetur"
        />
        <Service
          icon={motherboard}
          serviceTitle="Modernizacja komputerów"
          serviceText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          facere est molestiae voluptates recusandae consectetur"
        />
        <Service
          icon={repairKit}
          serviceTitle="Naprawa sprzętu komputerowego"
          serviceText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          facere est molestiae voluptates recusandae consectetur"
        />
        <Service
          icon={windows}
          serviceTitle="Instalacja oprogramowania"
          serviceText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
            facere est molestiae voluptates recusandae consectetur"
        />
        <Service
          icon={virus}
          serviceTitle="Usuwanie złośliwego oprogramowania"
          serviceText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
          facere est molestiae voluptates recusandae consectetur"
        />
      </div>
    </div>
  );
};

export default Services;
