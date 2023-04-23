import React from 'react';

import { useAppSelector } from '@/store/store-hooks';

import { selectOrder } from '@/state/orderSlice';
const OrderStatusDetails: React.FC = (): JSX.Element => {
  const order = useAppSelector(selectOrder);
  return (
    <div className='bg-black-stalion flex w-full flex-col items-center justify-center'>
      {order.orderDetails?.status === 'diagnosing' && (
        <div className='flex h-[100vh] flex-col items-center justify-center text-center'>
          <h1 className='text-[3.5rem] font-bold uppercase'>
            Serwisant <span className='text-pylon'>diagnozuje</span> <br />{' '}
            twoje urządzenie
          </h1>
          <p className='max-w-[800px]'>
            Nasi wykwalifikowani serwisanci są w trakcie diagnozowania Twojego
            urządzenia, aby jak najszybciej znaleźć przyczynę problemu.
            Wykorzystujemy najnowsze narzędzia i technologie, aby zapewnić
            dokładną i kompleksową diagnozę. Nasz zespół składa się z
            doświadczonych specjalistów, którzy wiedzą, jak naprawić urządzenia
            różnych marek i modeli. Dzięki naszemu podejściu opartemu na
            precyzji i skrupulatności możesz mieć pewność, że Twoje urządzenie
            jest w dobrych rękach i zostanie naprawione jak najszybciej. Staramy
            się zapewnić Ci jak największą wygodę i komfort, dlatego też na
            bieżąco informujemy Cię o postępach w diagnozowaniu Twojego
            urządzenia.
          </p>
        </div>
      )}
    </div>
  );
};
export default OrderStatusDetails;
