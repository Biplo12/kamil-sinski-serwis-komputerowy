import React from 'react';

import TextSide from '@/components/Common/TextSide';
const WhyUs: React.FC = (): JSX.Element => {
  return (
    <div className='bg-black-stalion mxlg:flex-col-reverse flex h-auto min-h-[100vh] w-full items-center justify-between overflow-hidden '>
      <TextSide
        title='Dlaczego my?'
        text='Jako specjaliści od serwisu urządzeń komputerowych, jesteśmy zawsze
          gotowi pomóc naszym klientom w rozwiązywaniu problemów związanych z
          ich sprzętem. Nasze doświadczenie obejmuje zarówno hardware, jak i
          software, co oznacza, że jesteśmy w stanie rozwiązać niemal każdy
          problem, z jakim mogą się spotkać nasi klienci. Jesteśmy przekonani,
          że nasza wiedza i umiejętności w zakresie serwisu komputerowego są
          wyjątkowe i stawiamy na dostarczanie wysokiej jakości usług. Bez
          względu na to, czy potrzebujesz pomocy przy instalacji nowego sprzętu,
          usuwaniu wirusów z systemu operacyjnego, czy odzyskiwaniu utraconych
          danych, nasi eksperci są gotowi do działania. Klienci, którzy
          korzystają z naszych usług, cenią nas za nasze profesjonalne
          podejście, szybką reakcję na zgłoszenia oraz konkurencyjne ceny.
          Zawsze staramy się zapewnić naszym klientom najlepsze rozwiązania, aby
          mogli w pełni cieszyć się z używania swojego sprzętu. Jeśli szukasz
          profesjonalnego serwisu komputerowego, który oferuje kompleksowe
          rozwiązania dla twoich urządzeń, to jesteśmy gotowi Ci pomóc.
          Skontaktuj się z nami, aby dowiedzieć się, jak możemy Ci pomóc z
          twoimi potrzebami serwisowymi.'
      />
      <img
        src='/images/example-2.png'
        alt='about-me'
        className='mxlg:h-1/2 mxlg:w-full mxlg:max-w-none h-[100vh] w-1/2 object-cover'
      />
    </div>
  );
};
export default WhyUs;
