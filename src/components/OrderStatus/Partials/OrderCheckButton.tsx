import React from 'react';

import useFetchOrderById from '@/hooks/tanstack/useFetchOrderById';

interface IOrderCheckButton {
  orderInput: string;
}

const OrderCheckButton: React.FC<IOrderCheckButton> = ({
  orderInput,
}): JSX.Element => {
  const { refetch, isLoading } = useFetchOrderById(orderInput);
  return (
    <button
      type='submit'
      className='bg-pylon focus:shadow-outline mt-3 rounded-lg px-4 py-2 font-bold text-white transition
      duration-300 ease-in-out hover:opacity-75 focus:outline-none
      disabled:cursor-not-allowed disabled:opacity-50'
      disabled={orderInput.length < 1}
      onClick={() => refetch()}
    >
      {isLoading ? 'Sprawdzam...' : 'Sprawdź status'}
    </button>
  );
};
export default OrderCheckButton;
