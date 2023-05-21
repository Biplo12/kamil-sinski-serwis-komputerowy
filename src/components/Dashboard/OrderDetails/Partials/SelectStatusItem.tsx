import React, { useEffect, useRef } from 'react';

import { IOrderInputValues } from '@/interfaces';
import { IOrder } from '@/interfaces/IOrderSlice';

interface ISelectStatusItem {
  label: string;
  setInputValues: React.Dispatch<React.SetStateAction<IOrderInputValues>>;
  inputValues: IOrderInputValues;
  orderDetails: IOrder | null;
}

const SelectStatusItem: React.FC<ISelectStatusItem> = ({
  label,
  setInputValues,
  inputValues,
  orderDetails,
}): JSX.Element => {
  const radioRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (radioRef.current && orderDetails) {
      radioRef.current.checked =
        orderDetails.status.toLowerCase() === label.toLowerCase();
    }
  }, [orderDetails, label]);

  const handleClick = () => {
    setInputValues({ ...inputValues, status: label });

    if (radioRef.current) {
      radioRef.current.checked = true;
    }
  };

  return (
    <div
      className='flex w-full cursor-pointer items-center rounded border border-gray-700 px-4 duration-150 ease-in-out hover:border-gray-600 hover:bg-gray-700'
      onClick={handleClick}
    >
      <input
        id={`bordered-radio-${label}`}
        type='radio'
        value={label}
        name='bordered-radio'
        className='checked:bg-ring-blue-600 h-4 w-4 bg-gray-700 text-blue-600 checked:border-gray-600 checked:ring-offset-gray-800 focus:ring-0 focus:ring-offset-0'
        ref={radioRef}
      />

      <label
        htmlFor={`bordered-radio-${label}`}
        className='ml-2 w-full cursor-pointer py-4 text-sm font-medium text-gray-300'
      >
        {label}
      </label>
    </div>
  );
};

export default SelectStatusItem;
