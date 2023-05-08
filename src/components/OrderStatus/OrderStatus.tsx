import Link from 'next/link';
import React, { useState } from 'react';

import OrderCheckButton from '@/components/OrderStatus/Partials/OrderCheckButton';
import OrderInput from '@/components/OrderStatus/Partials/OrderInput';
const OrderStatus: React.FC = (): JSX.Element => {
  const [orderInput, setOrderInput] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div
      className='bg-black-stalion flex h-auto min-h-[100vh] w-full flex-col items-center justify-center px-5 py-10'
      id='status-zlecenia'
    >
      <div className='flex flex-col items-start justify-start gap-5'>
        <h1 className='mxlg:text-3xl text-[4rem] font-[400] uppercase'>
          Sprawdz status <span className='text-pylon font-bold'>zlecenia</span>
        </h1>
        <p className='max-w-[800px] text-left'>
          W celu sprawdzenia statusu zlecenia należy wprowadzić identyfikator
          zlecenia wysłany na adres e-mail. Jeśli nie posiadasz identyfikatora
          zlecenia, skontaktuj się z nami pod
          <span className='text-pylon'>
            <a href='tel:+48513292132'> numerem telefonu</a>
          </span>{' '}
          lub poprzez{' '}
          <span className='text-pylon'>
            <Link href='/#kontakt'>formularz kontaktowy.</Link>
          </span>
        </p>
        <OrderInput
          setOrderInput={setOrderInput}
          orderInput={orderInput}
          loading={loading}
        />
        <OrderCheckButton
          orderInput={orderInput}
          setLoading={setLoading}
          setOrderInput={setOrderInput}
        />
      </div>
    </div>
  );
};
export default OrderStatus;
