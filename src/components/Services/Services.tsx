import React, { Fragment } from 'react';

import ResponsiveService from '@/components/Services/Partials/ResponsiveService';
import Service from '@/components/Services/Partials/Service';

interface IServicesData {
  title: string;
  icon: string;
  description: string;
  classContent: string;
}

const Services: React.FC = (): JSX.Element => {
  const servicesData: IServicesData[] = [
    {
      title: 'Konserwacja laptopów i komputerów',
      icon: 'clock',
      description:
        'Oferujemy profesjonalną konserwację i naprawę laptopów i komputerów. Nasza firma specjalizuje się w czyszczeniu układów chłodzenia, wymianie past termoprzewodzących, oczyszczaniu ekranu oraz naprawie poważniejszych problemów.',
      classContent:
        'mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden row-start-1 row-end-4 text-center',
    },
    {
      title: 'Doradztwo komputerowe',
      icon: 'question-mark',
      description:
        'Nasze usługi doradztwa komputerowego skierowane są do firm i osób prywatnych, pomagając w doborze najlepszego sprzętu oraz oprogramowania. Dzięki naszym usługom zminimalizujesz ryzyko awarii i zyskasz większą wydajność swojego komputera lub laptopa.',
      classContent: 'mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden text-center',
    },
    {
      title: 'Modernizacja komputerów',
      icon: 'motherboard',
      description:
        'Oferujemy usługi modernizacji komputerów, obejmujące wymianę dysku twardego na SSD, zwiększenie ilości pamięci RAM, wymianę karty graficznej lub procesora na bardziej wydajne modele oraz instalację odpowiedniego oprogramowania. Dzięki temu zwiększysz wydajność i żywotność swojego sprzętu.',
      classContent: 'mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden text-center',
    },
    {
      title: 'Naprawa sprzętu komputerowego',
      icon: 'repair-kit',
      description:
        'Naprawiamy sprzęt komputerowy dla firm i osób prywatnych. Zatrudniamy doświadczonych specjalistów, którzy szybko i skutecznie naprawią Twój sprzęt. Rozwiązujemy różne rodzaje usterek.',
      classContent:
        'mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden col-start-2 col-end-4 row-start-1 row-end-3 text-center',
    },
    {
      title: 'Instalacja oprogramowania',
      icon: 'windows',
      description:
        'Wykonujemy usługi instalacji oprogramowania na komputerach i laptopach dla firm oraz osób prywatnych. Nasz zespół specjalistów zainstaluje i skonfiguruje dla Ciebie różnego rodzaju oprogramowanie, takie jak systemy operacyjne, programy biurowe, narzędzia antywirusowe oraz wiele innych.',
      classContent:
        'mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden col-start-1 col-end-3 text-center',
    },
    {
      title: 'Usuwanie złośliwego oprogramowania',
      icon: 'virus',
      description:
        'Usuwanie złośliwego oprogramowania jest jednym z naszych kluczowych serwisów. Nasi specjaliści pomogą Ci wykryć i usunąć szkodliwe oprogramowanie z Twojego komputera lub laptopa. W ten sposób zminimalizujesz ryzyko utraty danych oraz zapewnisz bezpieczeństwo swojego sprzętu.',
      classContent: 'mxxl:w-1/2 mxxl:p-3 mxmd:w-full mxmd:hidden text-center',
    },
  ];
  return (
    <>
      <div
        className='bg-black-stalion mxmd:h-0 mxmd:min-h-0 mxlg:pt-0 flex h-auto min-h-[100vh] w-full flex-col items-center justify-center gap-10 overflow-hidden px-5 pt-10'
        id='nasze-uslugi'
      >
        <h1 className='mxsm:text-[2.5rem] mxmd:hidden text-[4rem] font-light uppercase tracking-wide'>
          Nasze <span className='text-pylon font-bold'>usługi</span>
        </h1>
        <div className='mxxl:flex mxxl:flex-wrap mxxl:gap-0 mxmd:flex-col grid w-full grid-flow-row grid-cols-3 gap-5 px-[10%]'>
          {servicesData.map((service, index) => (
            <Fragment key={index}>
              <Service
                title={service.title}
                icon={service.icon}
                description={service.description}
                classContent={service.classContent}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className=' bg-black-stalion mxmd:flex mxmd:gap-10 mxlg:pt-5 hidden flex-col items-center justify-center px-5 pt-10'>
        <h1 className='mxmd:text-[2.5rem] text-center text-[4rem] font-light uppercase tracking-wide'>
          Nasze <span className='text-pylon font-bold'>usługi</span>
        </h1>
        <div className='flex flex-col gap-5'>
          {servicesData.map((service, index) => (
            <Fragment key={index}>
              <ResponsiveService
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default Services;
