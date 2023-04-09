import React from 'react';
const ResponsiveCards: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='bg-sea mxxl:p-3 flex h-full min-h-[450px] flex-col items-center justify-center text-center'>
        <img src='/svg/clock.png' alt='clock icon' className='w-12' />
        <h1 className='py-3 text-xl font-bold'>
          Konserwacja laptopów i komputerów
        </h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>
            Oferujemy profesjonalną konserwację i naprawę laptopów i komputerów.
            Nasza firma specjalizuje się w czyszczeniu układów chłodzenia,
            wymianie past termoprzewodzących, oczyszczaniu ekranu oraz naprawie
            poważniejszych problemów.
          </p>
        </div>
      </div>
      <div className='bg-sea mxxl:p-3 flex h-[350px] min-h-[450px] flex-col items-center justify-center text-center'>
        <img src='/svg/question-mark.png' alt='clock icon' className='w-12' />
        <h1 className='py-3 text-xl font-bold'>Doradztwo komputerowe</h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>
            Nasze usługi doradztwa komputerowego skierowane są do firm i osób
            prywatnych, pomagając w doborze najlepszego sprzętu oraz
            oprogramowania. Dzięki naszym usługom zminimalizujesz ryzyko awarii
            i zyskasz większą wydajność swojego komputera lub laptopa.
          </p>
        </div>
      </div>
      <div className='bg-sea mxxl:p-3 flex h-[350px] min-h-[450px] flex-col items-center justify-center text-center'>
        <img src='/svg/motherboard.png' alt='clock icon' className='w-12' />
        <h1 className='py-3 text-xl font-bold'>Modernizacja komputerów</h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>
            Oferujemy usługi modernizacji komputerów, obejmujące wymianę dysku
            twardego na SSD, zwiększenie ilości pamięci RAM, wymianę karty
            graficznej lub procesora na bardziej wydajne modele oraz instalację
            odpowiedniego oprogramowania. Dzięki temu zwiększysz wydajność i
            żywotność swojego sprzętu.
          </p>
        </div>
      </div>
      <div className='bg-sea mxxl:p-3 flex h-[350px] min-h-[450px] flex-col items-center justify-center text-center'>
        <img src='/svg/repair-kit.png' alt='clock icon' className='w-12' />
        <h1 className='py-3 text-xl font-bold'>
          Naprawa sprzętu komputerowego
        </h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>
            Naprawiamy sprzęt komputerowy dla firm i osób prywatnych.
            Zatrudniamy doświadczonych specjalistów, którzy szybko i skutecznie
            naprawią Twój sprzęt. Rozwiązujemy różne rodzaje usterek.
          </p>
        </div>
      </div>
      <div className='bg-sea mxxl:p-3 flex h-[350px] min-h-[450px] flex-col items-center justify-center text-center'>
        <img src='/svg/windows.png' alt='clock icon' className='w-12' />
        <h1 className='py-3 text-xl font-bold'>Instalacja oprogramowania</h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>
            Wykonujemy usługi instalacji oprogramowania na komputerach i
            laptopach dla firm oraz osób prywatnych. Nasz zespół specjalistów
            zainstaluje i skonfiguruje dla Ciebie różnego rodzaju
            oprogramowanie, takie jak systemy operacyjne, programy biurowe,
            narzędzia antywirusowe oraz wiele innych.
          </p>
        </div>
      </div>
      <div className='bg-sea mxxl:p-3 flex h-[350px] min-h-[450px] flex-col items-center justify-center text-center'>
        <img src='/svg/virus.png' alt='clock icon' className='w-12' />
        <h1 className='py-3 text-xl font-bold'>
          Usuwanie złośliwego oprogramowania
        </h1>
        <div className='max-w-[600px]'>
          <p className='text-center text-[0.95rem]'>
            Usuwanie złośliwego oprogramowania jest jednym z naszych kluczowych
            serwisów. Nasi specjaliści pomogą Ci wykryć i usunąć szkodliwe
            oprogramowanie z Twojego komputera lub laptopa. W ten sposób
            zminimalizujesz ryzyko utraty danych oraz zapewnisz bezpieczeństwo
            swojego sprzętu.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResponsiveCards;
