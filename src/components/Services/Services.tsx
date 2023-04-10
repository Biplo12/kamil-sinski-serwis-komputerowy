import React from 'react';

import Card from '@/components/Services/Partials/Card';
import ResponsiveCards from '@/components/Services/Partials/ResponsiveCards';
const Services: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='bg-black-stalion mxmd:h-0 mxmd:min-h-0 flex h-auto min-h-[100vh] w-full flex-col items-center justify-start gap-5 overflow-hidden pt-5'>
        <h1 className='mxsm:text-[2.5rem] text-[4rem] font-bold uppercase tracking-wide'>
          Nasze <span className='text-pylon'>usługi</span>
        </h1>
        <div className='grid- mxxl:flex mxxl:flex-wrap mxxl:p-10 mxxl:gap-0 mxmd:flex-col  grid w-full grid-flow-row grid-cols-3 gap-5 px-[10%]'>
          <div className='mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden row-start-1 row-end-4 text-center'>
            <Card
              title='Konserwacja laptopów i komputerów'
              icon='clock'
              description='Oferujemy profesjonalną konserwację i naprawę laptopów i komputerów. Nasza firma specjalizuje się w czyszczeniu układów chłodzenia, wymianie past termoprzewodzących, oczyszczaniu ekranu oraz naprawie poważniejszych problemów.'
            />
          </div>
          <div className='mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden text-center'>
            <Card
              title='Doradztwo komputerowe'
              icon='question-mark'
              description='Nasze usługi doradztwa komputerowego skierowane są do firm i osób prywatnych, pomagając w doborze najlepszego sprzętu oraz oprogramowania. Dzięki naszym usługom zminimalizujesz ryzyko awarii i zyskasz większą wydajność swojego komputera lub laptopa.'
            />
          </div>
          <div className='mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden text-center'>
            <Card
              title='Modernizacja komputerów'
              icon='motherboard'
              description='Oferujemy usługi modernizacji komputerów, obejmujące wymianę dysku twardego na SSD, zwiększenie ilości pamięci RAM, wymianę karty graficznej lub procesora na bardziej wydajne modele oraz instalację odpowiedniego oprogramowania. Dzięki temu zwiększysz wydajność i żywotność swojego sprzętu.'
            />
          </div>
          <div className='mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden col-start-2 col-end-4 row-start-1 row-end-3 text-center'>
            <Card
              title='Naprawa sprzętu komputerowego'
              icon='repair-kit'
              description='Naprawiamy sprzęt komputerowy dla firm i osób prywatnych. Zatrudniamy doświadczonych specjalistów, którzy szybko i skutecznie naprawią Twój sprzęt. Rozwiązujemy różne rodzaje usterek.'
            />
          </div>
          <div className='mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden col-start-1 col-end-3 text-center'>
            <Card
              title='Instalacja oprogramowania'
              icon='windows'
              description='Wykonujemy usługi instalacji oprogramowania na komputerach i laptopach dla firm oraz osób prywatnych. Nasz zespół specjalistów zainstaluje i skonfiguruje dla Ciebie różnego rodzaju oprogramowanie, takie jak systemy operacyjne, programy biurowe, narzędzia antywirusowe oraz wiele innych.'
            />
          </div>
          <div className='mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden text-center'>
            <Card
              title='Usuwanie złośliwego oprogramowania'
              icon='virus'
              description='Usuwanie złośliwego oprogramowania jest jednym z naszych kluczowych serwisów. Nasi specjaliści pomogą Ci wykryć i usunąć szkodliwe oprogramowanie z Twojego komputera lub laptopa. W ten sposób zminimalizujesz ryzyko utraty danych oraz zapewnisz bezpieczeństwo swojego sprzętu.'
            />
          </div>
        </div>
      </div>
      <div className=' bg-black-stalion mxmd:flex mxmd:gap-5 hidden flex-col items-center justify-center p-5 '>
        <h1 className='mxmd:text-[2.5rem] text-center text-[4rem] font-bold uppercase tracking-wide'>
          Nasze <span className='text-pylon'>usługi</span>
        </h1>
        <ResponsiveCards />
      </div>
    </>
  );
};
export default Services;
