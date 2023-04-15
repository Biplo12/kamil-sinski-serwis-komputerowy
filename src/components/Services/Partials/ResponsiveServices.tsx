import React from 'react';

import ResponsiveService from '@/components/Services/Partials/ResponsiveService';
const ResponsiveServices: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col gap-5'>
      <ResponsiveService
        title='Konserwacja laptopów i komputerów'
        icon='clock'
        description='Oferujemy profesjonalną konserwację i naprawę laptopów i komputerów. Nasza firma specjalizuje się w czyszczeniu układów chłodzenia, wymianie past termoprzewodzących, oczyszczaniu ekranu oraz naprawie poważniejszych problemów.'
      />
      <ResponsiveService
        title='Doradztwo komputerowe'
        icon='question-mark'
        description='Nasze usługi doradztwa komputerowego skierowane są do firm i osób prywatnych, pomagając w doborze najlepszego sprzętu oraz oprogramowania. Dzięki naszym usługom zminimalizujesz ryzyko awarii i zyskasz większą wydajność swojego komputera lub laptopa.'
      />
      <ResponsiveService
        title='Modernizacja komputerów'
        icon='motherboard'
        description='Oferujemy usługi modernizacji komputerów, obejmujące wymianę dysku twardego na SSD, zwiększenie ilości pamięci RAM, wymianę karty graficznej lub procesora na bardziej wydajne modele oraz instalację odpowiedniego oprogramowania. Dzięki temu zwiększysz wydajność i żywotność swojego sprzętu.'
      />
      <ResponsiveService
        title='Naprawa sprzętu komputerowego'
        icon='repair-kit'
        description='Naprawiamy sprzęt komputerowy dla firm i osób prywatnych. Zatrudniamy doświadczonych specjalistów, którzy szybko i skutecznie naprawią Twój sprzęt. Rozwiązujemy różne rodzaje usterek.'
      />
      <ResponsiveService
        title='Instalacja oprogramowania'
        icon='windows'
        description='Wykonujemy usługi instalacji oprogramowania na komputerach i laptopach dla firm oraz osób prywatnych. Nasz zespół specjalistów zainstaluje i skonfiguruje dla Ciebie różnego rodzaju oprogramowanie, takie jak systemy operacyjne, programy biurowe, narzędzia antywirusowe oraz wiele innych.'
      />
      <ResponsiveService
        title='Usuwanie złośliwego oprogramowania'
        icon='virus'
        description='Usuwanie złośliwego oprogramowania jest jednym z naszych kluczowych serwisów. Nasi specjaliści pomogą Ci wykryć i usunąć szkodliwe oprogramowanie z Twojego komputera lub laptopa. W ten sposób zminimalizujesz ryzyko utraty danych oraz zapewnisz bezpieczeństwo swojego sprzętu.'
      />
    </div>
  );
};
export default ResponsiveServices;
