import React from 'react';

import ContactIcon from '@/Contact/Partials/ContactIcon';
const ContactInfo: React.FC = (): JSX.Element => {
  return (
    <div className='bg-blue h-full min-h-[800px] w-[25%] min-w-[400px] max-w-[600px] rounded-[1rem] p-3'>
      <div className='relative p-3'>
        <img src='/images/ellipse.png' alt='ellipse' />
        <div className='absolute left-0 top-0 flex flex-col items-start justify-center p-5'>
          <h1 className='mxmd:text-[2rem] text-center text-[3rem] font-bold '>
            Kontakt
          </h1>
          <p>
            Zapraszamy do kontaktu z naszym zespołem w celu uzyskania
            szczegółowych informacji na temat naszych usług. Jesteśmy do Twojej
            dyspozycji i chętnie pomożemy w rozwiązaniu wszelkich problemów
            związanych z Twoim sprzętem komputerowym.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-5 px-5 pt-20'>
        <ContactIcon
          icon='location'
          content='Bytom, karbowska 13/1 41-923'
          href='https://www.google.pl/maps/place/Karbowska+13,+41-923+Bytom/@50.3578451,18.8591928,17z/data=!3m1!4b1!4m5!3m4!1s0x47112cfa55b42dc3:0xd481eac55e6a9cd6!8m2!3d50.3578417!4d18.8613815'
        />
        <ContactIcon
          icon='phone'
          content='+48 513 292 132'
          href='tel:+48513292132'
        />
        <ContactIcon
          icon='mail'
          content='kamilsinskiserwis@gmail.com'
          href='mailto:kamilsinskiserwis@gmail.com'
        />
        <ContactIcon
          icon='facebook'
          content='/kamilsinskiserwis'
          href='https://www.facebook.com/kamilsinskiserwis'
        />
      </div>
    </div>
  );
};
export default ContactInfo;
