import React, { Fragment } from 'react';

import SelectStatusItem from '@/components/Dashboard/OrderDetails/Partials/SelectStatusItem';

import { IOrderInputValues } from '@/interfaces';
import { IOrder } from '@/interfaces/IOrderSlice';

interface ISelectOrderStatus {
  orderDetails: IOrder | null;
  setInputValues: React.Dispatch<React.SetStateAction<IOrderInputValues>>;
  inputValues: IOrderInputValues;
}

const SelectOrderStatus: React.FC<ISelectOrderStatus> = ({
  orderDetails,
  setInputValues,
  inputValues,
}): JSX.Element => {
  const availableStatuses = [
    {
      label: 'New',
    },
    {
      label: 'Diagnosing',
    },
    {
      label: 'Repairing',
    },
    {
      label: 'Repaired',
    },
    {
      label: 'Completed',
    },
    {
      label: 'Cancelled',
    },
  ];

  return (
    <div className='mt-5'>
      <label
        htmlFor='message'
        className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Order Status
      </label>
      <div className='mxsm:flex-wrap flex w-full gap-3'>
        {availableStatuses.map((status, index) => (
          <Fragment key={index}>
            <SelectStatusItem
              label={status.label}
              setInputValues={setInputValues}
              inputValues={inputValues}
              orderDetails={orderDetails}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default SelectOrderStatus;
