import { Html } from '@react-email/html';
import React from 'react';

interface IEmailTemplate {
  firstName: string | undefined;
  lastName: string | undefined;
  orderId: number | undefined;
}

export const EmailTemplate: React.FC<IEmailTemplate> = ({
  firstName,
  lastName,
  orderId,
}): JSX.Element => {
  return (
    <Html>
      <div className='bg-black-stalion p-4 text-center text-white'>
        <h1 className='text-2xl font-bold'>
          Cześć {firstName} {lastName},
        </h1>
        <p>Dziękujemy za złożenie zamówienia w naszym sklepie.</p>
        <p>
          Twoje zamówienie o numerze {orderId} zostało przyjęte do realizacji.
        </p>
        <p>W razie pytań prosimy o kontakt.</p>
        <p>Pozdrawiamy,</p>
        <>Zespół sklepu kamilsinski.pl</>
        <br />
        <p>
          Wiadomość wygenerowana automatycznie. Prosimy na nią nie odpowiadać.
        </p>
      </div>
    </Html>
  );
};
export default EmailTemplate;
