import React from 'react';
import toast from 'react-hot-toast';

import useDeleteOrder from '@/hooks/tanstack/Orders/useDeleteOrder';

interface IDeleteButton {
  orderId: number;
}

const DeleteButton: React.FC<IDeleteButton> = ({ orderId }): JSX.Element => {
  const { mutateAsync } = useDeleteOrder(orderId);

  const deleteOrder = async () => {
    try {
      await mutateAsync();
      toast.success('Order deleted successfully');
    } catch (error) {
      toast.error('Error deleting order');
    }
  };

  return (
    <button
      onClick={() => deleteOrder()}
      className='focus:shadow-outline flex max-h-[30px] min-w-[30px] items-center justify-center rounded-lg bg-red-600 px-3
    py-2 text-center font-bold
    text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
    >
      Delete
    </button>
  );
};
export default DeleteButton;
