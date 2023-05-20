import React from 'react';

import OrderStatusText from '@/components/OrderStatusDetails/Partials/OrderStatusText';

import { useAppSelector } from '@/store/store-hooks';

import { selectOrder } from '@/state/orderSlice';

interface IOrderStatuses {
  new: {
    headerText: JSX.Element;
    text: string;
  };
  repairing: {
    headerText: JSX.Element;
    text: string;
  };
  repaired: {
    headerText: JSX.Element;
    text: string;
  };
  completed: {
    headerText: JSX.Element;
    text: string;
  };
  cancelled: {
    headerText: JSX.Element;
    text: string;
  };
}

const orderStatuses: IOrderStatuses = {
  new: {
    headerText: (
      <h1 className='mxlg:text-3xl mxsm:text-m text-[2.5rem] font-bold uppercase'>
        Serwisanci <span className='text-pylon'>diagnozują</span> twoje
        urządzenie
      </h1>
    ),
    text: `Nasi wykwalifikowani serwisanci są w trakcie diagnozowania Twojego
            urządzenia, aby jak najszybciej znaleźć przyczynę problemu.
            Wykorzystujemy najnowsze narzędzia i technologie, aby zapewnić
            dokładną i kompleksową diagnozę. Nasz zespół składa się z
            doświadczonych specjalistów, którzy wiedzą, jak naprawić urządzenia
            różnych marek i modeli. Dzięki naszemu podejściu opartemu na
            precyzji i skrupulatności możesz mieć pewność, że Twoje urządzenie
            jest w dobrych rękach i zostanie naprawione jak najszybciej. Staramy
            się zapewnić Ci jak największą wygodę i komfort, dlatego też na
            bieżąco informujemy Cię o postępach w diagnozowaniu Twojego
            urządzenia.`,
  },
  repairing: {
    headerText: (
      <h1 className='mxlg:text-3xl mxsm:text-m text-[2.5rem] font-bold uppercase'>
        Serwisanci <span className='text-pylon'>naprawiją</span> twoje
        urządzenie
      </h1>
    ),
    text: `Nasi wykwalifikowani serwisanci dokładnie zdiagnozowali usterkę Twojego urządzenia i teraz pracują nad jego naprawą. 
            Dzięki naszym specjalistom, którzy posiadają bogate doświadczenie oraz wiedzę z zakresu naprawy różnych marek i modeli urządzeń, 
            masz pewność, że Twoje urządzenie jest w dobrych rękach.
            Nasi serwisanci wykorzystują najnowsze narzędzia i technologie, aby zapewnić kompleksową naprawę Twojego urządzenia. 
            Dbamy o to, aby każdy element został naprawiony z precyzją i skrupulatnością, co pozwoli na jego dalszą sprawność.
            Staramy się zapewnić Ci jak największy komfort i wygodę, dlatego na bieżąco informujemy Cię o postępach w naprawie Twojego urządzenia. 
            Możesz mieć pewność, że zrobimy wszystko, co w naszej mocy, aby Twoje urządzenie zostało naprawione jak najszybciej i że zostaniesz poinformowany o każdym etapie naprawy.`,
  },
  repaired: {
    headerText: (
      <h1 className='mxlg:text-3xl mxsm:text-m text-[2.5rem] font-bold uppercase'>
        Serwisanci <span className='text-pylon'>naprawili</span> twoje
        urządzenie
      </h1>
    ),
    text: `Mamy dla Ciebie dobrą wiadomość - nasz zespół wykwalifikowanych serwisantów zakończył naprawę Twojego urządzenia! 
            Dzięki wykorzystaniu najnowszych narzędzi i technologii, udało nam się dokładnie zlokalizować i usunąć przyczynę problemu.
            Nasi specjaliści posiadają bogate doświadczenie w naprawie różnych marek i modeli urządzeń, dlatego możesz mieć 
            pewność, że Twoje urządzenie zostało naprawione z precyzją i skrupulatnością.
            Staramy się zapewnić naszym klientom jak największy komfort i wygodę, dlatego informujemy Cię, że Twoje urządzenie 
            jest gotowe do odbioru. Przygotowaliśmy dla Ciebie kompleksowe sprawdzenie urządzenia, aby upewnić się, że wszystko działa poprawnie. 
            Możesz odebrać swoje urządzenie w naszym serwisie.
            Dziękujemy, że zdecydowałeś się skorzystać z naszych usług i zapewniamy, że zawsze możesz na nas liczyć w przypadku 
            problemów z Twoim urządzeniem.`,
  },
  completed: {
    headerText: (
      <h1 className='mxlg:text-3xl mxsm:text-m text-[2.5rem] font-bold uppercase'>
        Zlecenie zostało <span className='text-pylon'>zakończone</span>
      </h1>
    ),
    text: `Mamy przyjemność poinformować Cię, że zlecenie naprawy Twojego urządzenia zostało zakończone z powodzeniem! 
            Nasz wykwalifikowany zespół serwisantów przeprowadził 
            dokładną diagnostykę i skrupulatnie naprawił wszystkie usterki.
            Nasi specjaliści posiadają bogate doświadczenie w naprawie różnych marek i modeli urządzeń, dlatego mogłeś być pewien, że 
            Twoje urządzenie było w najlepszych rękach. 
            Wykorzystali najnowsze narzędzia i technologie, aby zapewnić kompleksową naprawę i przywrócić pełną funkcjonalność Twojego urządzenia.
            Po zakończeniu naprawy, przeprowadziliśmy kompleksowe sprawdzenie urządzenia, aby upewnić się, że wszystko działa poprawnie. 
            Możesz być spokojny, że Twój sprzęt został starannie przetestowany i spełnia wysokie standardy jakości.`,
  },
  cancelled: {
    headerText: (
      <h1 className='mxlg:text-3xl mxsm:text-m text-[2.5rem] font-bold uppercase'>
        Zlecenie zostało <span className='text-pylon'>anulowane</span>
      </h1>
    ),
    text: `Mamy przykrość poinformować, że zlecenie naprawy Twojego urządzenia zostało anulowane. Chcielibyśmy przeprosić za wszelkie niedogodności, jakie mogą wyniknąć z tej sytuacji.
            Niestety, z różnych powodów, naprawa Twojego urządzenia nie mogła zostać przeprowadzona zgodnie z planem. Nasz zespół serwisantów dokładnie przeanalizował sytuację i zdecydowaliśmy, 
            że anulacja zlecenia jest najlepszym rozwiązaniem.
            Pragniemy zapewnić Ci, że podjęliśmy wszelkie możliwe kroki, aby ocenić przyczynę problemu i podjąć odpowiednie działania. Chociaż naprawa nie została zrealizowana, 
            Twoje zlecenie było dla nas ważne, i doceniamy, że zdecydowałeś się skorzystać z naszych usług.
            Jeśli nadal masz problemy z urządzeniem lub potrzebujesz dalszej pomocy, zachęcamy Cię do skontaktowania się z naszym zespołem serwisowym. Jesteśmy gotowi do udzielenia 
            Ci profesjonalnego wsparcia i znalezienia najlepszego rozwiązania dla Ciebie.
            Jeszcze raz przepraszamy za wszelkie niedogodności i liczymy na to, że w przyszłości będziemy mieli możliwość obsłużyć Cię z pełnym profesjonalizmem i zadowoleniem.
             Dziękujemy za zrozumienie.`,
  },
};

const OrderStatusDetails: React.FC = (): JSX.Element => {
  const order = useAppSelector(selectOrder);
  const orderStatus = order.orderDetails?.status as keyof IOrderStatuses;
  return (
    <div className='bg-black-stalion mxlg:pb-10 flex w-full flex-col items-center justify-center'>
      <OrderStatusText
        headerText={orderStatuses?.[orderStatus]?.headerText}
        text={orderStatuses?.[orderStatus]?.text}
        order={order.orderDetails}
      />
    </div>
  );
};

export default OrderStatusDetails;
