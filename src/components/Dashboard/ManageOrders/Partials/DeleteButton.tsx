import React from 'react';

import useDeleteOrderCall from '@/hooks/Orders/useDeleteOrderCall';

import Spinner from '@/components/Common/Spinner';

interface IDeleteButton {
  orderId: number;
}

const DeleteButton: React.FC<IDeleteButton> = ({ orderId }): JSX.Element => {
  const { deleteOrder, isLoading } = useDeleteOrderCall(orderId);

  return (
    <button
      onClick={() => deleteOrder()}
      className='focus:shadow-outline flex max-h-[30px] min-w-[30px] items-center justify-center rounded-lg bg-red-600 px-3
    py-2 text-center
    font-bold text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : 'Delete'}
    </button>
  );
};
export default DeleteButton;
