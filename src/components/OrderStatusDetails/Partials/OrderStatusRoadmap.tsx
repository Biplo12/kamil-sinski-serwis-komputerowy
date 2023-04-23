import React from 'react';
import { format, register } from 'timeago.js';

import pl_PL from './pl';
interface IOrderDetails {
  id: string;
  email: string;
  status: string;
  message: string;
  statusMessage: string;
  createdAt: string;
  updatedAt: string;
  repairedAt?: string;
  repairingAt?: string;
}

interface IOrder {
  order: IOrderDetails | null;
}

const OrderStatusRoadmap: React.FC<IOrder> = ({ order }): JSX.Element => {
  const orderStatus = order?.status;

  register('pl_PL', pl_PL);

  return (
    <ol className='mxlg:flex-col flex w-full items-center'>
      <li className='mxlg:w-[90%] mxlg:mx-auto relative w-[350px]'>
        <div className='flex items-center justify-center gap-3'>
          <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
            <img src='/svg/glass-active.svg' alt='wrench icon' />
          </div>
          <div className='bg-pylon h-0.5 w-full' />
        </div>
        <div className='mt-3 sm:pr-8'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Diagnostyka
          </h3>
          <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {order?.createdAt && format(order?.createdAt, 'pl_PL')}
          </time>
        </div>
      </li>
      <li className='mxlg:w-[90%] mxlg:mx-auto relative w-[350px]'>
        <div className='flex items-center justify-center gap-3'>
          <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
            <img
              src={`/svg/wrench${
                orderStatus === 'repairing' || orderStatus === 'repaired'
                  ? '-active'
                  : ''
              }.svg`}
              alt='wrench icon'
            />
          </div>
          <div
            className={`h-0.5 w-full ${
              orderStatus === 'repairing' || orderStatus === 'repaired'
                ? 'bg-pylon'
                : 'bg-gray-700'
            }`}
          />
        </div>
        <div className='mt-3 sm:pr-8'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Naprawa
          </h3>
          <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {orderStatus === 'repairing' || orderStatus === 'repaired'
              ? order?.repairingAt && format(order?.repairingAt, 'pl_PL')
              : '---'}
          </time>
        </div>
      </li>
      <li className='mxlg:w-[90%] mxlg:mx-auto relative w-[350px]'>
        <div className='flex items-center justify-center gap-3'>
          <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
            <img
              src={`/svg/checked${
                orderStatus === 'repaired' ? '-active' : ''
              }.svg`}
              alt='wrench icon'
            />
          </div>
          <div
            className={`h-0.5 w-full ${
              orderStatus === 'repaired' ? 'bg-pylon' : 'bg-gray-700'
            }`}
          />
        </div>
        <div className='mt-3 sm:pr-8'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Naprawa zakończona
          </h3>
          <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {orderStatus === 'repaired'
              ? order?.repairedAt && format(order?.repairedAt, 'pl_PL')
              : '---'}
          </time>
        </div>
      </li>
    </ol>
  );
};
export default OrderStatusRoadmap;
