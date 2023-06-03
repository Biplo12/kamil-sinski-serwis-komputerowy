import { useRouter } from 'next/router';
import React from 'react';

interface IDetailsButton {
  orderId?: number;
  userId?: number;
}

const DetailsButton: React.FC<IDetailsButton> = ({
  orderId,
  userId,
}): JSX.Element => {
  const router = useRouter();
  const isOrder = orderId ? true : false;
  const handleDetails = () => {
    const url = isOrder
      ? `/admin/dashboard/manage-orders/${orderId}`
      : `/admin/dashboard/manage-users/${userId}`;
    router.push(url);
  };

  return (
    <button
      onClick={() => handleDetails()}
      className='from-pylon to-sea focus:shadow-outline flex max-h-[30px] min-w-[30px] items-center justify-center rounded-lg bg-gradient-to-r px-3
      py-2 text-center
      font-bold text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
    >
      Details
    </button>
  );
};
export default DetailsButton;
