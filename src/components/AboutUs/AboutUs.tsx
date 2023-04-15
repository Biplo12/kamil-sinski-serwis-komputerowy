import React from 'react';

import TextSide from '@/components/Common/TextSide';
const AboutUs: React.FC = (): JSX.Element => {
  return (
    <div
      className='bg-black-stalion mxlg:flex-col flex h-auto min-h-[100vh] w-full items-center justify-between overflow-hidden'
      id='o-nas'
    >
      <img
        src='/images/example-1.png'
        alt='about-me'
        className='mxlg:h-1/2 mxlg:w-full mxlg:max-w-none h-[100vh] w-1/2 object-cover'
      />
      <TextSide
        title='O nas'
        text='Nasza wizja to zapewnienie naszym klientom nie tylko najlepszych usług serwisowych, 
        ale także kompleksowej obsługi i doradztwa w zakresie wyboru odpowiedniego sprzętu i oprogramowania do ich potrzeb. 
        Stawiamy na indywidualne podejście do każdego klienta, aby zapewnić najlepsze 
        rozwiązania zgodne z jego potrzebami. W naszej pracy kierujemy się zasadami rzetelności, uczciwości i profesjonalizmu. 
        Stawiamy na ciągły rozwój naszych umiejętności i wiedzy, aby sprostać wymaganiom 
        rynku oraz zapewnić najwyższą jakość usług. 
        Działamy z myślą o zadowoleniu naszych klientów, dlatego oferujemy konkurencyjne 
        ceny, szybką reakcję na zgłoszenia oraz gwarancję jakości naszych usług. 
        Dzięki temu, nasi klienci czują się u nas komfortowo i mają pewność, 
        że ich sprzęt jest w dobrych rękach. 
        Jeśli szukasz profesjonalnego serwisu komputerowego, który oferuje 
        nie tylko serwis, ale także kompleksową obsługę i doradztwo, to jesteśmy gotowi Ci pomóc. 
        Skontaktuj się z nami, aby dowiedzieć się więcej o naszej firmie i 
        naszych usługach.'
      />
    </div>
  );
};
export default AboutUs;
